import React from 'react';
import Link from 'next/link';
import { Plane, Clock, ShieldCheck, Moon, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';

export default function AirportAccommodationPage() {
  const airportBranches = DEVI_BRANCHES.filter(
    (b) => b.branch_code === 1 || b.branch_code === 2 || b.branch_code === 5
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 bg-[#F5F1E9]">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          RGIA AVIATION & AIRPORT STAFF QUARTERS
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          Airport Employee Accommodation in Shamshabad
        </h1>
        <p className="text-[#263447] text-sm sm:text-base leading-relaxed">
          Engineered for aviation ground handling personnel, cabin crew, security officers, and airport operations staff working rotational shifts at Rajiv Gandhi International Airport.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <Clock className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">24/7 Biometric Entry</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Arrive safely at any hour. Unrestricted entry for verified residents on early morning or night shifts.
          </p>
        </div>

        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <Moon className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">Quiet Day Hours</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Daytime quiet-hours protocol ensuring deep, undisturbed rest after arduous night shifts.
          </p>
        </div>

        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <Utensils className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">Shift Meal Packs</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Early breakfast counters and packed meal options prepared for off-hour flight shifts.
          </p>
        </div>

        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <Plane className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">Airport Transit Hub</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Quick 5-minute transit to passenger terminal, cargo complex, and staff security checkpoints.
          </p>
        </div>
      </div>

      {/* Shift Suitable Branches */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#142B45] text-center">
          Branches Optimized for Airport Shift Staff
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {airportBranches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/enquiry?category=airport_employee"
          className="btn-primary-navy py-3 px-8 text-xs inline-flex items-center gap-2"
        >
          <span>Submit Airport Employee Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
