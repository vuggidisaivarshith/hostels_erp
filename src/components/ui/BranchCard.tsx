import React from 'react';
import Link from 'next/link';
import { Branch } from '@/types/database';
import { MapPin, Phone, Building2, CheckCircle2, ArrowRight, ShieldCheck, User } from 'lucide-react';

interface BranchCardProps {
  branch: Branch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  const isGirls = branch.gender_category === 'girls';

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col group">
      {/* Card Header & Gender Tag */}
      <div className={`p-6 ${isGirls ? 'bg-gradient-to-r from-rose-950/60 to-slate-900 border-b border-rose-900/30' : 'bg-gradient-to-r from-slate-900 to-slate-850 border-b border-slate-800'}`}>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
            BRANCH CODE {branch.branch_code}
          </span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
            isGirls
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
          }`}>
            <User className="w-3.5 h-3.5" />
            {isGirls ? 'GIRLS ONLY • HIGH SECURITY' : 'BOYS HOSTEL'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
          {branch.name}
        </h3>

        <p className="text-xs text-amber-300/90 font-medium mt-1 flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5" />
          {branch.distance_from_rgia}
        </p>
      </div>

      {/* Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
            {branch.description}
          </p>

          <div className="flex items-start gap-2 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>{branch.address_line1}, {branch.address_line2 || ''}, {branch.city}</span>
          </div>

          {/* Highlights */}
          <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Features:</p>
            <ul className="space-y-1.5">
              {branch.key_highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Monthly Rent From</p>
            <p className="text-lg font-black text-white">
              ₹{branch.starting_price_per_month.toLocaleString()}
              <span className="text-xs font-normal text-slate-400"> / bed</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/branches/${branch.branch_code}`}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Details
            </Link>
            <Link
              href={`/enquiry?branch=${branch.branch_code}`}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md flex items-center gap-1"
            >
              Book Room
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
