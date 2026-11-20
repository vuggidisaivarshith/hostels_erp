import React from 'react';
import Link from 'next/link';
import { Branch } from '@/types/database';
import { MapPin, Building2, CheckCircle2, ArrowRight, User } from 'lucide-react';

interface BranchCardProps {
  branch: Branch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  const isGirls = branch.gender_category === 'girls';

  return (
    <div className="card-glass rounded-2xl overflow-hidden flex flex-col group border border-slate-200/90 bg-white">
      {/* Card Header & Gender Tag */}
      <div className={`p-6 border-b ${isGirls ? 'bg-rose-50/70 border-rose-100' : 'bg-slate-50/70 border-slate-100'}`}>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="badge-mono text-[9px] bg-white">
            BRANCH CODE {branch.branch_code}
          </span>
          <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
            isGirls
              ? 'bg-rose-100 text-rose-800 border border-rose-200'
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            <User className="w-3 h-3" />
            {isGirls ? 'GIRLS ONLY • HIGH SECURITY' : 'BOYS HOSTEL'}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-[#0F172A] group-hover:text-[#365679] transition-colors">
          {branch.name}
        </h3>

        <p className="text-xs text-[#365679] font-medium mt-1 flex items-center gap-1.5 font-mono">
          <Building2 className="w-3.5 h-3.5" />
          {branch.distance_from_rgia}
        </p>
      </div>

      {/* Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-[#334155] line-clamp-3 leading-relaxed">
            {branch.description}
          </p>

          <div className="flex items-start gap-2 text-xs text-[#64748B]">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{branch.address_line1}, {branch.address_line2 || ''}, {branch.city}</span>
          </div>

          {/* Highlights */}
          <div className="bg-[#FAFAF9] rounded-xl p-3.5 border border-slate-200">
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-2">Key Highlights:</p>
            <ul className="space-y-1.5">
              {branch.key_highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="text-xs text-[#1E293B] flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[9px] uppercase font-bold text-[#64748B]">Monthly Rent From</p>
            <p className="font-serif text-lg font-bold text-[#0F172A]">
              ₹{branch.starting_price_per_month.toLocaleString()}
              <span className="font-sans text-xs font-normal text-[#64748B]"> / bed</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/branches/${branch.branch_code}`}
              className="btn-ghost-luxury py-2 px-3 text-[10px]"
            >
              Details
            </Link>
            <Link
              href={`/enquiry?branch=${branch.branch_code}`}
              className="btn-primary-ink py-2 px-3 text-[10px]"
            >
              Book Room
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
