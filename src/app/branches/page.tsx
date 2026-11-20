import React from 'react';
import Link from 'next/link';
import { DEVI_BRANCHES, VERIFIED_CONTACTS } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';
import { Building2, Sparkles, ShieldCheck } from 'lucide-react';

export default function BranchesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12 bg-[#F5F1E9]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          5 PRIME LOCATIONS IN SHAMSHABAD
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          All Five DEVI Hostels Branches
        </h1>
        <p className="text-[#263447] text-sm sm:text-base leading-relaxed">
          Centrally managed under one roof by Proprietor <strong>{VERIFIED_CONTACTS.owner_proprietor}</strong>. Explore our four Boys Hostel branches and our exclusive high-security Girls Hostel branch near Rajiv Gandhi International Airport (RGIA).
        </p>
      </div>

      {/* Highlights Bar */}
      <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-xs font-mono font-bold uppercase text-[#718096] tracking-wider">Total Branches</p>
          <p className="font-serif text-2xl font-bold text-[#142B45] mt-1">5 Properties</p>
          <p className="text-xs text-[#D6A85F] font-mono">4 Boys + 1 Girls Only</p>
        </div>
        <div className="sm:border-x border-[#E5E0D7]">
          <p className="text-xs font-mono font-bold uppercase text-[#718096] tracking-wider">Airport Transit</p>
          <p className="font-serif text-2xl font-bold text-[#142B45] mt-1">Minutes to RGIA</p>
          <p className="text-xs text-[#477B70] font-mono">Passenger & Cargo Gates</p>
        </div>
        <div>
          <p className="text-xs font-mono font-bold uppercase text-[#718096] tracking-wider">All-Inclusive Dining</p>
          <p className="font-serif text-2xl font-bold text-[#142B45] mt-1">3 Fresh Meals</p>
          <p className="text-xs text-[#D6A85F] font-mono">South & North Indian Daily</p>
        </div>
      </div>

      {/* Branches List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEVI_BRANCHES.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
}
