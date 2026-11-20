import React from 'react';
import Link from 'next/link';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';
import { Building2, Sparkles, ShieldCheck } from 'lucide-react';

export default function BranchesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          5 Prime Locations in Shamshabad
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          All Five DEVI Hostels Branches
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Centrally managed under one roof by Marpina Pradeep. Explore our four dedicated Boys Hostel branches and our exclusive high-security Girls Hostel branch near Rajiv Gandhi International Airport (RGIA).
        </p>
      </div>

      {/* Highlights Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Total Branches</p>
          <p className="text-2xl font-black text-white mt-1">5 Properties</p>
          <p className="text-xs text-amber-400">4 Boys + 1 Girls Only</p>
        </div>
        <div className="sm:border-x border-slate-800">
          <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Airport Proximity</p>
          <p className="text-2xl font-black text-white mt-1">4 to 8 Minutes</p>
          <p className="text-xs text-emerald-400">Direct RGIA Access Corridor</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">All-Inclusive Dining</p>
          <p className="text-2xl font-black text-white mt-1">3 Fresh Meals</p>
          <p className="text-xs text-amber-400">South & North Indian Daily</p>
        </div>
      </div>

      {/* Branches List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DEVI_BRANCHES.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
}
