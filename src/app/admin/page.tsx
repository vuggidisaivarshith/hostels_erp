import React from 'react';
import Link from 'next/link';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import {
  Users,
  Building2,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Phone,
  ArrowRight,
  Layers,
  GraduationCap,
  Plane
} from 'lucide-react';

export default function AdminOverviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
            Owner & Management Hub
          </span>
          <h1 className="text-3xl font-black text-white mt-1">
            DEVI HOSTELS Central Control
          </h1>
          <p className="text-xs text-slate-400">
            Proprietor: <strong>MARPINA PRADEEP</strong> • Shamshabad, Hyderabad
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/enquiries"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            Manage Enquiries Pipeline
          </Link>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
          <p className="text-xs font-bold uppercase text-slate-400">Centralized Branches</p>
          <p className="text-3xl font-black text-white">5</p>
          <p className="text-xs text-amber-400 font-medium">4 Boys Hostels + 1 Girls Hostel</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
          <p className="text-xs font-bold uppercase text-slate-400">Operational Hub</p>
          <p className="text-xl font-black text-white">Shamshabad</p>
          <p className="text-xs text-emerald-400 font-medium">4-8 min to RGIA Airport</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
          <p className="text-xs font-bold uppercase text-slate-400">Target Residents</p>
          <p className="text-xl font-black text-white">Students & Airport</p>
          <p className="text-xs text-blue-400 font-medium">Colleges & Airlines Staff</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
          <p className="text-xs font-bold uppercase text-slate-400">Current Roadmap</p>
          <p className="text-xl font-black text-amber-400">Phase 1 Complete</p>
          <p className="text-xs text-slate-400 font-medium">Website, Enquiries & Schema</p>
        </div>
      </div>

      {/* 5 Branches Operational Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-500" />
            Five Branch Status Overview
          </h3>
          <Link href="/branches" className="text-xs font-bold text-amber-400 hover:underline">
            Public Directory →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVI_BRANCHES.map((b) => (
            <div
              key={b.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-slate-800">
                  CODE {b.branch_code}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  b.gender_category === 'girls' ? 'bg-rose-500/20 text-rose-300' : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {b.gender_category === 'girls' ? 'Girls Only' : 'Boys Hostel'}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">{b.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{b.address_line1}</p>
                <p className="text-[11px] text-amber-400 mt-0.5 font-medium">{b.distance_from_rgia}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{b.total_floors} Floors</span>
                <Link
                  href={`/branches/${b.branch_code}`}
                  className="text-amber-400 font-bold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links to Upcoming Phases */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white">System Architecture & Phase Gateways</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold uppercase text-emerald-400">Phase 1 (Completed)</span>
            <p className="font-bold text-white">Foundation, DB & Public Web</p>
            <p className="text-slate-400">All 5 branch portals, responsive multi-step enquiry form, centralized schema & admin pipeline.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 opacity-80">
            <span className="text-[10px] font-bold uppercase text-amber-400">Phase 2 (Next Gate)</span>
            <p className="font-bold text-white">Resident Lifecycle & Beds</p>
            <p className="text-slate-400">Floor/bed visual allocation, permanent Resident ID engine, and dual authentication resident portal.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 opacity-80">
            <span className="text-[10px] font-bold uppercase text-blue-400">Phase 3 (Financials)</span>
            <p className="font-bold text-white">Joining-Date Billing Engine</p>
            <p className="text-slate-400">Recurring 30-day billing, advance rent ledger, refundable deposits, Razorpay and verified UPI recording.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
