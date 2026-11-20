'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ResidentInvoice, Resident } from '@/types/database';
import { FileText, CreditCard, Download, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResidentInvoicesPage() {
  const [invoices, setInvoices] = useState<ResidentInvoice[]>([]);
  const [resident, setResident] = useState<Resident | null>(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      const match = document.cookie.match(/devi_resident_id=([^;]+)/);
      const residentId = match ? match[1] : 'DV1-1-00001';
      const res = await fetch(`/api/residents/${residentId}`);
      const json = await res.json();
      if (json.success) {
        setInvoices(json.data.invoices);
        setResident(json.data.resident);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Monthly Rent Invoices</h1>
          <p className="text-xs text-slate-400">
            Individual joining-date billing records for Resident ID: <span className="font-mono text-amber-400 font-bold">{resident?.resident_id}</span>
          </p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">
            All Invoices ({invoices.length})
          </span>
          <span className="text-xs text-slate-400">
            Billing Anchor: <strong>{resident?.billing_anchor_day}th of every month</strong>
          </span>
        </div>

        {invoices.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-500">
            No rent invoices found.
          </div>
        ) : (
          <div className="divide-y divide-slate-800">
            {invoices.map((inv) => (
              <div
                key={inv.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-850 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{inv.invoice_number}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                      inv.status === 'paid'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}>
                      {inv.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Billing Period: <strong>{inv.billing_period_start}</strong> to <strong>{inv.billing_period_end}</strong>
                  </p>
                  <p className="text-xs text-slate-400">
                    Payment Due Date: <span className="text-amber-400 font-semibold">{inv.due_date}</span>
                  </p>
                </div>

                <div className="flex items-center gap-6 self-start sm:self-center">
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Total Payable</p>
                    <p className="text-lg font-black text-white font-mono">
                      ₹{inv.total_payable.toLocaleString()}
                    </p>
                    {inv.balance_due > 0 ? (
                      <p className="text-xs text-rose-400 font-semibold">
                        Due: ₹{inv.balance_due.toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-xs text-emerald-400 font-semibold">
                        Paid in Full
                      </p>
                    )}
                  </div>

                  <Link
                    href="/resident/receipts"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    Receipt
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
