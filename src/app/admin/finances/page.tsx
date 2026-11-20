'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FinancialOverviewSummary
} from '@/lib/data/financials-repo';
import {
  DollarSign,
  TrendingUp,
  CreditCard,
  Wallet,
  ShieldCheck,
  Building2,
  FileText,
  AlertCircle,
  Plus,
  RefreshCw,
  ArrowRight,
  PieChart,
  UserCheck
} from 'lucide-react';

export default function AdminFinancesPage() {
  const [overview, setOverview] = useState<FinancialOverviewSummary | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOverview = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/financials/overview');
      const json = await res.json();
      if (json.success) setOverview(json.data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
            Accounting & Financial Control
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Central Financial Dashboard
          </h1>
          <p className="text-xs text-slate-400">
            Proprietor: <strong>MARPINA PRADEEP</strong> • Shamshabad 5-Branch Centralized Financial Ledger
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={fetchOverview}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : ''}`} />
            Refresh
          </button>
          <Link
            href="/admin/finances/payments"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Record Offline Payment
          </Link>
          <Link
            href="/admin/finances/invoices"
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" /> Generate Invoices
          </Link>
        </div>
      </div>

      {/* Top Financial Metric Cards */}
      {overview && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-lg">
            <span className="text-[11px] font-bold uppercase text-slate-400">Gross Invoiced</span>
            <p className="text-2xl font-black text-white font-mono">
              ₹{overview.total_invoiced.toLocaleString()}
            </p>
            <p className="text-[10px] text-slate-500">Across all active cycles</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-lg">
            <span className="text-[11px] font-bold uppercase text-slate-400">Total Collected</span>
            <p className="text-2xl font-black text-emerald-400 font-mono">
              ₹{overview.total_collected.toLocaleString()}
            </p>
            <p className="text-[10px] text-emerald-500 font-medium">Bank-reconciled receipts</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-lg">
            <span className="text-[11px] font-bold uppercase text-slate-400">Outstanding Dues</span>
            <p className="text-2xl font-black text-rose-400 font-mono">
              ₹{overview.total_outstanding_dues.toLocaleString()}
            </p>
            <p className="text-[10px] text-rose-400 font-medium">Pending resident settlement</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-lg">
            <span className="text-[11px] font-bold uppercase text-slate-400">Advance Rent Held</span>
            <p className="text-2xl font-black text-blue-400 font-mono">
              ₹{overview.total_advance_held.toLocaleString()}
            </p>
            <p className="text-[10px] text-blue-300 font-medium">Credits toward next cycles</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-lg">
            <span className="text-[11px] font-bold uppercase text-slate-400">Security Deposits</span>
            <p className="text-2xl font-black text-amber-400 font-mono">
              ₹{overview.total_security_deposits.toLocaleString()}
            </p>
            <p className="text-[10px] text-amber-300 font-medium">Refundable escrow liability</p>
          </div>
        </div>
      )}

      {/* Payment Method Breakdown */}
      {overview && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-amber-500" />
                Collection Breakdown by Payment Instrument
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Clearly distinguishing verified online gateway, offline direct UPI, cash, and bank transfers.
              </p>
            </div>
            <Link href="/admin/finances/payments" className="text-xs font-bold text-amber-400 hover:underline">
              View All Transactions →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold uppercase text-slate-400">Online Gateway (UPI & Cards)</span>
              <p className="text-xl font-black text-white font-mono">
                ₹{overview.collections_by_method.online_upi.toLocaleString()}
              </p>
              <p className="text-[10px] text-emerald-400 font-medium">Auto-captured via Razorpay/Cashfree</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold uppercase text-slate-400">Direct QR / UPI Transfers</span>
              <p className="text-xl font-black text-white font-mono">
                ₹{overview.collections_by_method.direct_upi.toLocaleString()}
              </p>
              <p className="text-[10px] text-blue-400 font-medium">Bank-statement verified entries</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold uppercase text-slate-400">Cash Collections</span>
              <p className="text-xl font-black text-white font-mono">
                ₹{overview.collections_by_method.cash.toLocaleString()}
              </p>
              <p className="text-[10px] text-amber-400 font-medium">Physical receipts with accountant ID</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold uppercase text-slate-400">Direct Bank Transfers (NEFT/IMPS)</span>
              <p className="text-xl font-black text-white font-mono">
                ₹{overview.collections_by_method.bank_transfer.toLocaleString()}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">Direct corporate / parental credits</p>
            </div>
          </div>
        </div>
      )}

      {/* Branch Financial Summaries */}
      {overview && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-500" />
                Branch-Wise Revenue & Dues Comparison
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Centralized accounting across all 5 Shamshabad branches.
              </p>
            </div>
            <Link href="/admin/finances/reports" className="text-xs font-bold text-amber-400 hover:underline">
              Full Financial Reports →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {overview.branch_summaries.map((b) => (
              <div
                key={b.branch_code}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-amber-400">
                    BRANCH {b.branch_code}
                  </span>
                  <span className={`text-[10px] font-bold ${b.outstanding > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {b.outstanding > 0 ? `Dues: ₹${b.outstanding.toLocaleString()}` : 'No Dues'}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-white truncate">{b.branch_name}</h4>

                <div className="text-[11px] space-y-1 text-slate-400 border-t border-slate-850 pt-2 font-mono">
                  <p>Invoiced: <strong className="text-white">₹{b.invoiced.toLocaleString()}</strong></p>
                  <p>Collected: <strong className="text-emerald-400">₹{b.collected.toLocaleString()}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-module Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Link
          href="/admin/finances/invoices"
          className="p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all flex items-center justify-between group"
        >
          <div>
            <p className="text-xs font-bold text-white group-hover:text-amber-400">Invoice Manager</p>
            <p className="text-[11px] text-slate-500">Recurring joining-date bills</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
        </Link>

        <Link
          href="/admin/finances/payments"
          className="p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all flex items-center justify-between group"
        >
          <div>
            <p className="text-xs font-bold text-white group-hover:text-amber-400">Payment Collection</p>
            <p className="text-[11px] text-slate-500">Cash & Direct UPI entries</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
        </Link>

        <Link
          href="/admin/finances/deposits"
          className="p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all flex items-center justify-between group"
        >
          <div>
            <p className="text-xs font-bold text-white group-hover:text-amber-400">Security Deposits</p>
            <p className="text-[11px] text-slate-500">Escrow balances & refunds</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
        </Link>

        <Link
          href="/admin/finances/reports"
          className="p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all flex items-center justify-between group"
        >
          <div>
            <p className="text-xs font-bold text-white group-hover:text-amber-400">Financial Reports</p>
            <p className="text-[11px] text-slate-500">Audit sheets & statements</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
        </Link>
      </div>
    </div>
  );
}
