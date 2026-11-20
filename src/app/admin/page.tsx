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
  Plane,
  UserCheck,
  ArrowRightLeft,
  LifeBuoy,
  FileText
} from 'lucide-react';

export default function AdminOverviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
            Owner & Central Management Control
          </span>
          <h1 className="text-3xl font-black text-white mt-1">
            DEVI HOSTELS Operations Hub
          </h1>
          <p className="text-xs text-slate-400">
            Proprietor: <strong>MARPINA PRADEEP</strong> • Shamshabad, Hyderabad (5 Centralized Branches)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/finances"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <TrendingUp className="w-4 h-4" />
            Financial Dashboard
          </Link>
          <Link
            href="/admin/admissions"
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <UserCheck className="w-4 h-4" />
            New Admission
          </Link>
          <Link
            href="/admin/inventory"
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-semibold text-xs"
          >
            Room & Bed Vacancy
          </Link>
        </div>
      </div>

      {/* Main Administrative Action Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <Link
          href="/admin/finances"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition-all shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
            Finances & Ledgers
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Joining-date billing, advance credits, deposit escrow & offline collections.
          </p>
          <span className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-1">
            Open Finances <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/admin/inventory"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition-all shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
            Bed Inventory & Vacancy
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Branch ➔ Floor ➔ Room ➔ Bed allocation matrix with double-allocation prevention.
          </p>
          <span className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-1">
            Open Bed Matrix <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/admin/residents"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition-all shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
            Resident Directory
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Search active & historical resident records, permanent DEVI IDs, stays & profiles.
          </p>
          <span className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-1">
            View Residents <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/admin/admissions"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition-all shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <UserCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
            Admission & ID Engine
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Confirm admission, generate collision-safe IDs (`DV1-1-XXXXX`), and assign beds.
          </p>
          <span className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-1">
            Admit Resident <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/admin/operations"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition-all shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <ArrowRightLeft className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
            Operations & Transfers
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Execute room/branch transfers preserving permanent IDs, checkouts, and maintenance tickets.
          </p>
          <span className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-1">
            Manage Operations <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>

      {/* Five Branch Status Overview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-500" />
            Centralized 5-Branch Network
          </h3>
          <Link href="/branches" className="text-xs font-bold text-amber-400 hover:underline">
            Public Website Directory →
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
                  {b.gender_category === 'girls' ? 'Girls Only Enclave' : 'Boys Hostel'}
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
                  href={`/admin/inventory?branch=${b.branch_code}`}
                  className="text-amber-400 font-bold hover:underline"
                >
                  Inspect Bed Matrix →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
