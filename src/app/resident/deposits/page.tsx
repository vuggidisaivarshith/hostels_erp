'use client';

import React, { useState, useEffect } from 'react';
import { Resident } from '@/types/database';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';

export default function ResidentDepositsPage() {
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
        <h1 className="text-2xl font-bold text-white">Refundable Security Deposit</h1>
        <p className="text-xs text-slate-400">
          Escrow held against your admission to DEVI Hostels.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Total Refundable Deposit Held
            </span>
            <p className="text-3xl font-black text-emerald-400 font-mono mt-1">
              ₹{(resident?.security_deposit || 10000).toLocaleString()}
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            100% Refundable
          </span>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl flex items-start gap-3 text-xs text-emerald-300">
          <Info className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-white">DEVI Hostels Refund Policy:</p>
            <p>
              Your security deposit is returned directly to your bank account or UPI ID upon checkout after giving a 30-day move-out notice, subject to clearance of your final electricity/room inspection.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Deposit Ledger Breakdown
          </h3>
          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Security Deposit Paid at Admission</p>
              <p className="text-[11px] text-slate-400">Receipt Ref: DEP-{resident?.resident_id || 'DV1-1-00001'}</p>
            </div>
            <span className="font-mono font-bold text-emerald-400">
              ₹{(resident?.security_deposit || 10000).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
