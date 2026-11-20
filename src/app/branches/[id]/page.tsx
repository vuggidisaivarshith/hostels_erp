import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBranchByCode, getBranchById, DEVI_BRANCHES } from '@/lib/data/branches';
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  User,
  Wifi,
  Utensils,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    ...DEVI_BRANCHES.map((b) => ({ id: b.id })),
  ];
}

export default async function BranchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const branchNum = parseInt(id, 10);
  const branch = !isNaN(branchNum) ? getBranchByCode(branchNum) : getBranchById(id);

  if (!branch) {
    notFound();
  }

  const isGirls = branch.gender_category === 'girls';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link href="/branches" className="hover:text-white">Branches</Link>
        <span>/</span>
        <span className="text-amber-400 font-semibold">{branch.name}</span>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
              BRANCH CODE {branch.branch_code}
            </span>
            <span className={`text-xs font-bold px-3.5 py-1 rounded-full flex items-center gap-1.5 ${
              isGirls
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
            }`}>
              <User className="w-3.5 h-3.5" />
              {isGirls ? 'GIRLS ONLY • HIGH SECURITY ENCLAVE' : 'BOYS HOSTEL'}
            </span>
          </div>
          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Operational & Accepting Admissions
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {branch.name}
        </h1>

        <p className="text-amber-400 text-sm font-semibold mt-2 flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          {branch.distance_from_rgia}
        </p>

        <p className="text-slate-300 text-base max-w-3xl mt-4 leading-relaxed">
          {branch.description}
        </p>

        <div className="pt-8 border-t border-slate-800/80 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Starting Monthly Rent</p>
            <p className="text-3xl font-black text-white">
              ₹{branch.starting_price_per_month.toLocaleString()}
              <span className="text-sm font-normal text-slate-400"> / bed (Includes 3-Times Food & Wi-Fi)</span>
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/enquiry?branch=${branch.branch_code}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <span>Book Bed at Branch {branch.branch_code}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Grid: Details, Address & Facilities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Address & Floor Structure */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              Location & Contact
            </h3>
            <div className="text-xs text-slate-300 space-y-2">
              <p><strong>Address:</strong> {branch.address_line1}</p>
              {branch.address_line2 && <p>{branch.address_line2}</p>}
              <p><strong>City / Hub:</strong> {branch.city}, {branch.state} - {branch.pincode}</p>
              <p><strong>Contact Phone:</strong> <a href={`tel:${branch.contact_phone}`} className="text-amber-400 hover:underline">{branch.contact_phone}</a></p>
              <p><strong>Email:</strong> {branch.contact_email}</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" />
              Building & Floor Structure
            </h3>
            <p className="text-xs text-slate-400">
              Total Floors: <strong>{branch.total_floors} Floors</strong> (Ground Floor Dining + Residential Floors)
            </p>
            <div className="space-y-2 pt-2">
              {Array.from({ length: branch.total_floors }).map((_, idx) => (
                <div key={idx} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">
                    {idx === 0 ? 'Ground Floor (Reception & Dining)' : `Floor ${idx}`}
                  </span>
                  <span className="text-amber-400 font-mono text-[11px]">
                    ID Prefix: DV{branch.branch_code}-{idx === 0 ? '1' : idx}-xxxxx
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Columns: Facilities & Sharing Types */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Included Facilities & Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {branch.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">
              Room Sharing Configurations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400">1-Sharing</span>
                <p className="text-sm font-bold text-white">Private Executive Room</p>
                <p className="text-xs text-slate-400">Personal study desk, attached bathroom, wardrobe, AC / Non-AC.</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400">2-Sharing</span>
                <p className="text-sm font-bold text-white">Standard Comfort</p>
                <p className="text-xs text-slate-400">Twin beds, personal wardrobes, attached bathroom with geyser.</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400">3 & 4-Sharing</span>
                <p className="text-sm font-bold text-white">Economy & Budget</p>
                <p className="text-xs text-slate-400">Ideal for students & airport crew, spacious room layout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
