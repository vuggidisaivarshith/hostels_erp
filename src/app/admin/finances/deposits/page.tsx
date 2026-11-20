'use client';

import React, { useState, useEffect } from 'react';
import { DepositEntry } from '@/lib/data/financials-repo';
import { Resident } from '@/types/database';
import {
  ShieldCheck,
  Plus,
  AlertTriangle,
  RotateCcw,
  RefreshCw,
  Search,
  CheckCircle2
} from 'lucide-react';

export default function AdminDepositsPage() {
  const [entries, setEntries] = useState<DepositEntry[]>([]);
  const [residents, setResidents] = useState<Resident[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [residentId, setResidentId] = useState('');
  const [type, setType] = useState<'damage_deduction' | 'utility_deduction' | 'refund'>('damage_deduction');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchDeposits = async () => {
    setLoading(true);
    try {
      const [dRes, rRes] = await Promise.all([
        fetch('/api/financials/deposits'),
        fetch('/api/residents?status=active'),
      ]);
      const [dJson, rJson] = await Promise.all([dRes.json(), rRes.json()]);

      if (dJson.success) setEntries(dJson.data);
      if (rJson.success) {
        setResidents(rJson.data);
        if (rJson.data.length > 0 && !residentId) {
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
    fetchDeposits();
  }, []);

  const handleRecordDepositAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/financials/deposits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resident_id: residentId,
          type,
          amount: parseFloat(amount),
          remarks,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to process deposit transaction.');
      }

      setFeedback({ type: 'success', text: data.message });
      setShowModal(false);
      setAmount('');
      setRemarks('');
      fetchDeposits();
    } catch (err) {
      setFeedback({ type: 'error', text: (err as Error).message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
            Escrow Liability Management
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Refundable Security Deposit Ledger
          </h1>
          <p className="text-xs text-slate-400">
            Track refundable deposits held in escrow, room damage deductions, and checkout refunds.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Record Deduction / Refund
        </button>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              Deposit Deduction or Refund
            </h3>

            <form onSubmit={handleRecordDepositAction} className="space-y-4">
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
                      {r.resident_id} — {r.full_name} (Current Deposit: ₹{r.security_deposit.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Action Type *
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="damage_deduction">Room Damage Deduction</option>
                    <option value="utility_deduction">Electricity/Utility Clearance</option>
                    <option value="refund">Checkout Security Refund</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Amount (INR) *
                  </label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 1500"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500 font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Justification / Inspection Remarks *
                </label>
                <textarea
                  rows={3}
                  required
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="e.g. Key replacement cost, wall repainting, or bank transfer UTR for final refund..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
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
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md"
                >
                  {submitting ? 'Processing...' : 'Confirm Deposit Entry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Ledger Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">
            Deposit Transactions ({entries.length})
          </span>
          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Escrow Tracked
          </span>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs text-slate-500">
            Loading deposit transactions...
          </div>
        ) : entries.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-500">
            No deposit transactions found.
          </div>
        ) : (
          <div className="divide-y divide-slate-800">
            {entries.map((d) => (
              <div
                key={d.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-850 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {d.devi_resident_id}
                    </span>
                    <span className="text-sm font-bold text-white">{d.resident_name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      d.type === 'deposit_received'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : d.type === 'refund'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}>
                      {d.type.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">Date: {d.date}</p>
                  <p className="text-[11px] text-slate-300 italic">&quot;{d.remarks}&quot;</p>
                </div>

                <div className="text-right space-y-0.5">
                  <p className={`text-lg font-black font-mono ${
                    d.type === 'deposit_received' ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {d.type === 'deposit_received' ? '+' : '-'}₹{d.amount.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Deposit Balance After: <strong className="text-white font-mono">₹{d.balance_after.toLocaleString()}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
