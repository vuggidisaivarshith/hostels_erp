'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Wallet,
  ShieldCheck,
  Calendar,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Building,
  User,
  Clock,
  FileText,
  LifeBuoy
} from 'lucide-react';
import { Resident, ResidentInvoice, ResidentPayment } from '@/types/database';

export default function ResidentDashboardPage() {
  const [data, setData] = useState<{
    resident: Resident;
    invoices: ResidentInvoice[];
    payments: ResidentPayment[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      setLoading(true);
      try {
        const match = document.cookie.match(/devi_resident_id=([^;]+)/);
        const residentId = match ? match[1] : 'DV1-1-00001';

        const res = await fetch(`/api/residents/${residentId}`);
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="p-12 text-center text-slate-400 text-xs">
        Loading resident dashboard...
      </div>
    );
  }

  if (!data?.resident) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
        <p className="text-sm text-slate-300">No resident data found.</p>
        <Link
          href="/resident/login"
          className="inline-block px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
        >
          Go to Resident Login
        </Link>
      </div>
    );
  }

  const { resident, invoices, payments } = data;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
              PERMANENT ID: {resident.resident_id}
            </span>
            <span className="text-xs text-slate-400">
              Joined on {resident.admission_date}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Welcome, {resident.full_name}
          </h1>
          <p className="text-xs text-slate-300 max-w-xl">
            Currently residing at <strong>Branch {resident.current_branch_code}</strong>, Floor {resident.current_floor_number}, Room <strong>{resident.current_room_number}</strong> (Bed {resident.current_bed_number}).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/resident/invoices"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <CreditCard className="w-4 h-4" />
            Pay / View Invoices
          </Link>
        </div>
      </div>

      {/* Mandatory Metric Cards Grid from Section 5.E */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Agreed Monthly Rent */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Monthly Rent</span>
            <Building className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-black text-white">
            ₹{resident.agreed_monthly_rent.toLocaleString()}
          </p>
          <p className="text-[11px] text-slate-400">
            Due every month on the <strong>{resident.billing_anchor_day}th</strong>
          </p>
        </div>

        {/* Card 2: Outstanding Balance */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Outstanding Dues</span>
            <AlertCircle className={`w-4 h-4 ${resident.outstanding_balance > 0 ? 'text-rose-400' : 'text-emerald-400'}`} />
          </div>
          <p className={`text-2xl font-black ${resident.outstanding_balance > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
            ₹{resident.outstanding_balance.toLocaleString()}
          </p>
          <p className="text-[11px] text-slate-400">
            Next Payment: <strong>{resident.next_payment_due_date}</strong>
          </p>
        </div>

        {/* Card 3: Advance Balance */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Advance Balance</span>
            <Wallet className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-2xl font-black text-white">
            ₹{resident.advance_balance.toLocaleString()}
          </p>
          <p className="text-[11px] text-slate-400">
            Automatically applies against future rent bills
          </p>
        </div>

        {/* Card 4: Security Deposit Held */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2 shadow-lg">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Security Deposit</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white">
            ₹{resident.security_deposit.toLocaleString()}
          </p>
          <p className="text-[11px] text-emerald-400 font-medium">
            100% Refundable upon checkout notice
          </p>
        </div>
      </div>

      {/* Two Column Section: Recent Invoices & Recent Payment Receipts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Invoices */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-500" />
              Recent Rent Invoices
            </h3>
            <Link href="/resident/invoices" className="text-xs font-bold text-amber-400 hover:underline">
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {invoices.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">No invoices generated yet.</p>
            ) : (
              invoices.slice(0, 3).map((inv) => (
                <div
                  key={inv.id}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <p className="font-bold text-white">{inv.invoice_number}</p>
                    <p className="text-[11px] text-slate-400">
                      Period: {inv.billing_period_start} to {inv.billing_period_end}
                    </p>
                    <p className="text-[11px] text-slate-400">Due Date: {inv.due_date}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-mono font-bold text-white text-sm">
                      ₹{inv.total_payable.toLocaleString()}
                    </p>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold capitalize ${
                      inv.status === 'paid'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}>
                      {inv.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Payment Receipts */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Verified Payment Receipts
            </h3>
            <Link href="/resident/payments" className="text-xs font-bold text-amber-400 hover:underline">
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {payments.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">No payment records yet.</p>
            ) : (
              payments.slice(0, 3).map((pay) => (
                <div
                  key={pay.id}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <p className="font-bold text-white">{pay.receipt_number}</p>
                    <p className="text-[11px] text-slate-400">Date: {pay.payment_date}</p>
                    <p className="text-[10px] font-mono text-slate-500">{pay.transaction_reference}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-mono font-bold text-emerald-400 text-sm">
                      ₹{pay.amount.toLocaleString()}
                    </p>
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      Verified
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
