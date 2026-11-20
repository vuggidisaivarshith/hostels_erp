'use client';

import React, { useState, useEffect } from 'react';
import { Resident } from '@/types/database';
import { Wallet, Info, CheckCircle2 } from 'lucide-react';

export default function ResidentAdvancePage() {
  const [resident, setResident] = useState<Resident | null>(null);

  useEffect(() => {
    const fetchResident = async () => {
      const match = document.cookie.match(/devi_resident_id=([^;]+)/);
      const residentId = match ? match[1] : 'DV1-1-00001';
      const res = await fetch(`/api/residents/${residentId}`);
      const json = await res.json();
      if (json.success) setResident(json.data.resident);
    };
    fetchResident();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Advance Rent Credit Ledger</h1>
        <p className="text-xs text-slate-400">
          Independent advance rent account separate from security deposits.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Current Available Advance Credit
            </span>
            <p className="text-3xl font-black text-amber-400 font-mono mt-1">
              ₹{(resident?.advance_balance || 0).toLocaleString()}
            </p>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
            Resident ID: <strong className="text-white font-mono">{resident?.resident_id}</strong>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-2xl flex items-start gap-3 text-xs text-blue-300">
          <Info className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-white">How Advance Rent is Utilized:</p>
            <p>
              When your monthly rent invoice is generated on your joining date ({resident?.billing_anchor_day}th of every month), any available advance credit balance is automatically deducted before calculating the net balance payable.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Recent Advance Transactions
          </h3>
          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Opening Advance Credit</p>
              <p className="text-[11px] text-slate-400">Admission token balance adjustment</p>
            </div>
            <span className="font-mono font-bold text-emerald-400">
              +₹{(resident?.advance_balance || 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
