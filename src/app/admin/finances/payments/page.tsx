'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FinancialPayment } from '@/lib/data/financials-repo';
import { Resident } from '@/types/database';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import {
  CreditCard,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Building,
  User,
  ShieldCheck,
  Receipt
} from 'lucide-react';

function PaymentsManagementContent() {
  const searchParams = useSearchParams();
  const prefillResidentId = searchParams.get('resident_id');
  const prefillInvoiceId = searchParams.get('invoice_id');

  const [payments, setPayments] = useState<FinancialPayment[]>([]);
  const [residents, setResidents] = useState<Resident[]>([]);
  const [loading, setLoading] = useState(true);

  const [methodFilter, setMethodFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Record Offline Payment Modal
  const [showModal, setShowModal] = useState(false);
  const [residentId, setResidentId] = useState(prefillResidentId || '');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'direct_upi' | 'bank_transfer'>('direct_upi');
  const [reference, setReference] = useState('');
  const [collectorName, setCollectorName] = useState('Marpina Pradeep (Owner)');
  const [verificationStatus, setVerificationStatus] = useState<'verified' | 'pending'>('verified');
  const [remarks, setRemarks] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Reversal Modal
  const [reversalTarget, setReversalTarget] = useState<FinancialPayment | null>(null);
  const [reversalReason, setReversalReason] = useState('');
  const [reversing, setReversing] = useState(false);

  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (methodFilter !== 'all') params.append('method', methodFilter);
      if (statusFilter !== 'all') params.append('status', statusFilter);

      const [pRes, rRes] = await Promise.all([
        fetch(`/api/financials/payments?${params.toString()}`),
        fetch('/api/residents?status=active'),
      ]);
      const [pJson, rJson] = await Promise.all([pRes.json(), rRes.json()]);

      if (pJson.success) setPayments(pJson.data);
      if (rJson.success) {
        setResidents(rJson.data);
        if (!residentId && rJson.data.length > 0) {
          setResidentId(rJson.data[0].id);
        }
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [methodFilter, statusFilter]);

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/financials/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resident_id: residentId,
          amount: parseFloat(amount),
          payment_method: paymentMethod,
          transaction_reference: reference || `${paymentMethod.toUpperCase()}-${Date.now()}`,
          collector_name: collectorName,
          verification_status: verificationStatus,
          invoice_id: prefillInvoiceId || undefined,
          remarks,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to record payment.');
      }

      setFeedback({ type: 'success', text: data.message });
      setShowModal(false);
      setAmount('');
      setReference('');
      setRemarks('');
      fetchPayments();
    } catch (err) {
      setFeedback({ type: 'error', text: (err as Error).message });
    } finally {
      setSubmitting(false);
    }
  };

  const handleExecuteReversal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reversalTarget) return;
    setReversing(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/financials/payments/reverse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_id: reversalTarget.id,
          reversal_reason: reversalReason,
          actor_name: 'Marpina Pradeep (Owner)',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to reverse payment.');
      }

      setFeedback({ type: 'success', text: data.message });
      setReversalTarget(null);
      setReversalReason('');
      fetchPayments();
    } catch (err) {
      setFeedback({ type: 'error', text: (err as Error).message });
    } finally {
      setReversing(false);
    }
  };

  const filteredPayments = payments.filter((p) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      p.receipt_number.toLowerCase().includes(s) ||
      p.devi_resident_id.toLowerCase().includes(s) ||
      p.resident_name.toLowerCase().includes(s) ||
      p.transaction_reference.toLowerCase().includes(s)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
            Payment Collection & Reconciliation
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Omnichannel Payment Ledger
          </h1>
          <p className="text-xs text-slate-400">
            Record Cash & Direct UPI collections, reconcile bank credits, and audit verified transactions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" /> Record Cash / Direct UPI
          </button>
        </div>
      </div>

      {feedback && (
        <div className={`p-4 rounded-xl text-xs font-semibold ${
          feedback.type === 'success'
            ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
            : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
        }`}>
          {feedback.text}
        </div>
      )}

      {/* Record Offline Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-400" />
              Record Offline Collection
            </h3>

            <form onSubmit={handleRecordPayment} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Select Resident *
                </label>
                <select
                  value={residentId}
                  onChange={(e) => setResidentId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                >
                  {residents.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.resident_id} — {r.full_name} (Outstanding: ₹{r.outstanding_balance.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Amount Collected (INR) *
                  </label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 7000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500 font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Payment Method *
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="direct_upi">Direct QR / PhonePe / GPay</option>
                    <option value="cash">Cash Collection</option>
                    <option value="bank_transfer">Direct Bank Transfer (NEFT/IMPS)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Transaction Reference / UTR Number
                </label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="e.g. UPI/123456789012 or Cash Voucher No."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Verification Status *
                </label>
                <select
                  value={verificationStatus}
                  onChange={(e) => setVerificationStatus(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="verified">Verified against received bank credit</option>
                  <option value="pending">Pending bank statement clearance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Collector / Staff Name *
                </label>
                <input
                  type="text"
                  required
                  value={collectorName}
                  onChange={(e) => setCollectorName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md"
                >
                  {submitting ? 'Recording...' : 'Confirm & Issue Official Receipt'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reversal Modal */}
      {reversalTarget && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-rose-500" />
              Reverse Verified Transaction
            </h3>
            <p className="text-xs text-slate-300">
              You are reversing receipt <strong>{reversalTarget.receipt_number}</strong> for <strong>₹{reversalTarget.amount.toLocaleString()}</strong> ({reversalTarget.resident_name}).
              Financial records are never deleted; an offsetting reversal entry will be written to the ledger.
            </p>

            <form onSubmit={handleExecuteReversal} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Reason for Reversal / Adjustment *
                </label>
                <textarea
                  rows={3}
                  required
                  value={reversalReason}
                  onChange={(e) => setReversalReason(e.target.value)}
                  placeholder="e.g. Bank chargeback, duplicate manual entry, or cheque return..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setReversalTarget(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={reversing}
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md"
                >
                  {reversing ? 'Reversing...' : 'Execute Counter-Adjustment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by receipt number (e.g. RCPT-2026-001), Resident ID, transaction reference..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
              Payment Method
            </label>
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Payment Methods</option>
              <option value="online_upi">Online UPI / Razorpay</option>
              <option value="direct_upi">Direct QR / PhonePe</option>
              <option value="cash">Cash Collection</option>
              <option value="bank_transfer">Direct Bank Transfer</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
              Verification Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Statuses</option>
              <option value="verified">Verified & Captured</option>
              <option value="pending">Pending Bank Verification</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">
            Total Transactions ({filteredPayments.length})
          </span>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs text-slate-500">
            Loading payments...
          </div>
        ) : filteredPayments.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-500">
            No payments found.
          </div>
        ) : (
          <div className="divide-y divide-slate-800">
            {filteredPayments.map((p) => (
              <div
                key={p.id}
                className={`p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                  p.is_reversed ? 'opacity-60 bg-slate-950/40' : 'hover:bg-slate-850'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-sm text-white font-mono">{p.receipt_number}</span>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {p.devi_resident_id}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">{p.resident_name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      p.is_reversed
                        ? 'bg-rose-500/20 text-rose-300'
                        : p.status === 'verified'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {p.is_reversed ? 'Reversed' : p.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Method: <strong className="text-amber-400 uppercase">{p.payment_method.replace('_', ' ')}</strong> • Date: {p.payment_date} • Collector: {p.collector_name}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500">
                    Ref: {p.transaction_reference}
                  </p>
                  {p.remarks && <p className="text-[11px] text-slate-400 italic">&quot;{p.remarks}&quot;</p>}
                </div>

                <div className="flex items-center gap-4 self-start sm:self-center">
                  <div className="text-right">
                    <p className={`text-lg font-black font-mono ${p.amount < 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {p.amount < 0 ? '-' : '+'}₹{Math.abs(p.amount).toLocaleString()}
                    </p>
                  </div>

                  {!p.is_reversed && p.amount > 0 && (
                    <button
                      type="button"
                      onClick={() => setReversalTarget(p)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600/20 hover:text-rose-300 text-slate-400 text-xs font-semibold transition-colors"
                      title="Reverse transaction"
                    >
                      Reverse
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminPaymentsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading payment ledger...</div>}>
      <PaymentsManagementContent />
    </Suspense>
  );
}
