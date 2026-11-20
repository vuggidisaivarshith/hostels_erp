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
  LifeBuoy,
  Receipt,
  Sparkles
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
      <div className="p-12 text-center text-[#64748B] text-xs font-mono">
        Loading resident dashboard & financial ledger...
      </div>
    );
  }

  if (!data?.resident) {
    return (
      <div className="card-editorial p-8 text-center space-y-4">
        <p className="text-sm text-[#0F172A] font-bold">No resident session found.</p>
        <Link
          href="/resident/login"
          className="btn-primary-ink inline-block"
        >
          Sign In to Resident Portal
        </Link>
      </div>
    );
  }

  const { resident, invoices, payments } = data;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg border border-[#1E293B]">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded border border-amber-400/40">
              PERMANENT ID: {resident.resident_id}
            </span>
            <span className="text-xs text-slate-300 font-mono">
              Admitted: {resident.admission_date}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Welcome, {resident.full_name}
          </h1>
          <p className="text-xs text-slate-300 max-w-xl">
            Currently allocated to <strong>Branch {resident.current_branch_code}</strong>, Floor {resident.current_floor_number}, Room <strong>{resident.current_room_number}</strong> (Bed {resident.current_bed_number}).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/resident/invoices"
            className="btn-emerald-cta text-xs py-2.5 px-4 flex items-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            <span>Pay Rent Online (Instant UPI)</span>
          </Link>
          <Link
            href="/resident/receipts"
            className="btn-ghost-luxury text-white border-slate-600 hover:bg-slate-800 text-xs py-2.5 px-3 flex items-center gap-1.5"
          >
            <Receipt className="w-3.5 h-3.5" />
            <span>Receipts</span>
          </Link>
        </div>
      </div>

      {/* Financial Action Quick Hub */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Resident Financial & Payment Hub
            </span>
          </div>
          <span className="text-[11px] text-[#64748B]">
            All transactions are reconciled with DEVI Hostels Central Ledger
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <Link
            href="/resident/invoices"
            className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200 transition-colors flex items-center gap-2 group"
          >
            <FileText className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-xs text-[#0F172A]">Invoices & Bills</p>
              <p className="text-[10px] text-slate-500 font-mono">View cycle dues</p>
            </div>
          </Link>

          <Link
            href="/resident/payments"
            className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 transition-colors flex items-center gap-2 group"
          >
            <CreditCard className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-xs text-[#0F172A]">Payment History</p>
              <p className="text-[10px] text-slate-500 font-mono">Online & cash logs</p>
            </div>
          </Link>

          <Link
            href="/resident/advance"
            className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 transition-colors flex items-center gap-2 group"
          >
            <Wallet className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-xs text-[#0F172A]">Advance Rent</p>
              <p className="text-[10px] text-slate-500 font-mono">₹{resident.advance_balance} credit</p>
            </div>
          </Link>

          <Link
            href="/resident/deposits"
            className="p-3 rounded-xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200 transition-colors flex items-center gap-2 group"
          >
            <ShieldCheck className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-bold text-xs text-[#0F172A]">Security Deposit</p>
              <p className="text-[10px] text-slate-500 font-mono">₹{resident.security_deposit} escrow</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Mandatory Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Agreed Monthly Rent */}
        <div className="card-editorial p-6 space-y-2 bg-white">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-xs font-bold uppercase tracking-wider font-mono">Monthly Rent</span>
            <Building className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#0F172A]">
            ₹{resident.agreed_monthly_rent.toLocaleString()}
          </p>
          <p className="text-[11px] text-[#64748B]">
            Due every month on the <strong className="text-[#0F172A]">{resident.billing_anchor_day}th</strong>
          </p>
        </div>

        {/* Card 2: Outstanding Balance */}
        <div className="card-editorial p-6 space-y-2 bg-white">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-xs font-bold uppercase tracking-wider font-mono">Outstanding Dues</span>
            <AlertCircle className={`w-4 h-4 ${resident.outstanding_balance > 0 ? 'text-rose-500' : 'text-emerald-500'}`} />
          </div>
          <p className={`text-3xl font-serif font-bold ${resident.outstanding_balance > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
            ₹{resident.outstanding_balance.toLocaleString()}
          </p>
          <p className="text-[11px] text-[#64748B]">
            Next Due: <strong className="text-[#0F172A]">{resident.next_payment_due_date}</strong>
          </p>
        </div>

        {/* Card 3: Advance Balance */}
        <div className="card-editorial p-6 space-y-2 bg-white">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-xs font-bold uppercase tracking-wider font-mono">Advance Balance</span>
            <Wallet className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#0F172A]">
            ₹{resident.advance_balance.toLocaleString()}
          </p>
          <p className="text-[11px] text-[#64748B]">
            Auto-credited against future rent invoices
          </p>
        </div>

        {/* Card 4: Security Deposit Held */}
        <div className="card-editorial p-6 space-y-2 bg-white">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-xs font-bold uppercase tracking-wider font-mono">Security Deposit</span>
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-3xl font-serif font-bold text-[#0F172A]">
            ₹{resident.security_deposit.toLocaleString()}
          </p>
          <p className="text-[11px] text-emerald-600 font-semibold">
            100% Refundable upon checkout notice
          </p>
        </div>
      </div>

      {/* Two Column Section: Recent Invoices & Recent Payment Receipts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Invoices */}
        <div className="card-editorial p-6 space-y-4 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-serif text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-600" />
              Recent Rent Invoices
            </h3>
            <Link href="/resident/invoices" className="text-xs font-bold text-[#365679] hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {invoices.length === 0 ? (
              <p className="text-xs text-[#64748B] py-6 text-center">No invoices generated yet.</p>
            ) : (
              invoices.slice(0, 3).map((inv) => (
                <div
                  key={inv.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <p className="font-bold text-[#0F172A] font-mono">{inv.invoice_number}</p>
                    <p className="text-[11px] text-[#64748B]">
                      Period: {inv.billing_period_start} to {inv.billing_period_end}
                    </p>
                    <p className="text-[11px] text-[#64748B]">Due Date: {inv.due_date}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-mono font-bold text-[#0F172A] text-sm">
                      ₹{inv.total_payable.toLocaleString()}
                    </p>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold capitalize ${
                      inv.status === 'paid'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
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
        <div className="card-editorial p-6 space-y-4 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-serif text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Verified Payment Receipts
            </h3>
            <Link href="/resident/payments" className="text-xs font-bold text-[#365679] hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {payments.length === 0 ? (
              <p className="text-xs text-[#64748B] py-6 text-center">No payment records yet.</p>
            ) : (
              payments.slice(0, 3).map((pay) => (
                <div
                  key={pay.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <p className="font-bold text-[#0F172A] font-mono">{pay.receipt_number}</p>
                    <p className="text-[11px] text-[#64748B]">Date: {pay.payment_date}</p>
                    <p className="text-[10px] font-mono text-[#64748B]">{pay.transaction_reference}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-mono font-bold text-emerald-700 text-sm">
                      ₹{pay.amount.toLocaleString()}
                    </p>
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
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
