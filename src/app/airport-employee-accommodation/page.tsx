import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plane, Clock, Moon, Utensils, ShieldCheck, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';

export default function AirportAccommodationPage() {
  const airportBranches = DEVI_BRANCHES.filter(
    (b) => b.branch_code === 1 || b.branch_code === 2 || b.branch_code === 4 || b.branch_code === 5
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#F5F1E9]">
      {/* Short Hero */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          RGIA AVIATION & SHIFT LIVING
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          Airport Employee Living in Shamshabad
        </h1>
        <p className="text-[#263447] text-sm leading-relaxed">
          Engineered for aviation ground handling personnel, cabin crew, security officers, and airport operations staff working rotational shifts at Rajiv Gandhi International Airport.
        </p>
      </div>

      {/* 4 Shift Benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <Clock className="w-5 h-5 text-[#D6A85F]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">24/7 Access</h3>
          <p className="text-[11px] text-[#718096]">Unrestricted entry for verified shift staff.</p>
        </div>
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <Moon className="w-5 h-5 text-[#D6A85F]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">Daytime Quiet</h3>
          <p className="text-[11px] text-[#718096]">Strict day quiet-hours for post-night sleep.</p>
        </div>
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <Utensils className="w-5 h-5 text-[#D6A85F]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">Shift Meal Packs</h3>
          <p className="text-[11px] text-[#718096]">Early breakfast counters and packed food.</p>
        </div>
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <Plane className="w-5 h-5 text-[#477B70]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">5-Min to RGIA</h3>
          <p className="text-[11px] text-[#718096]">Direct access to passenger & cargo gates.</p>
        </div>
      </div>

      {/* Genuine Photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card-editorial overflow-hidden bg-white">
          <div className="relative aspect-4/3 w-full bg-[#142B45]">
            <Image
              src="/images/branches/branch1-main.svg"
              alt="Devi Mansion Flagship"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="font-serif text-xs font-bold text-[#142B45]">Devi Mansion Flagship</p>
            <p className="text-[10px] text-[#718096]">Street 8, Rallaguda Road (Gym & Parking)</p>
          </div>
        </div>

        <div className="card-editorial overflow-hidden bg-white">
          <div className="relative aspect-4/3 w-full bg-[#142B45]">
            <Image
              src="/images/branches/branch2-main.svg"
              alt="Branch 2 Airport Staff Enclave"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="font-serif text-xs font-bold text-[#142B45]">Airport Staff Enclave</p>
            <p className="text-[10px] text-[#718096]">Branch 2 — Near RGIA Transit</p>
          </div>
        </div>

        <div className="card-editorial overflow-hidden bg-white col-span-2 md:col-span-1">
          <div className="relative aspect-4/3 w-full bg-[#142B45]">
            <Image
              src="/images/branches/room-boys-2.svg"
              alt="Shift Worker Room Layout"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="font-serif text-xs font-bold text-[#142B45]">Shift Rest Room</p>
            <p className="text-[10px] text-[#718096]">Quiet Ventilation & Attached Bath</p>
          </div>
        </div>
      </div>

      {/* Shift Suitable Branches */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <h2 className="font-serif text-2xl font-bold text-[#142B45]">
            Shift-Friendly Branches
          </h2>
          <p className="text-xs text-[#718096]">
            Every branch features high-speed Wi-Fi, 24/7 hot water, CCTV security, and wholesome food.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {airportBranches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </div>

      {/* Single Enquiry / Contact CTA */}
      <div className="card-editorial p-6 sm:p-8 bg-[#142B45] text-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-6 border-0">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif text-xl font-bold text-[#D6A85F]">
            Need Shift-Based Accommodation Near RGIA?
          </h3>
          <p className="text-xs text-[#E5E0D7] max-w-xl">
            Submit your shift schedule and room preference. Admissions team will contact you with availability and verified location coordinates.
          </p>
        </div>
        <Link
          href="/enquiry?category=airport_employee"
          className="btn-accent-gold py-3 px-6 text-xs whitespace-nowrap inline-flex items-center gap-2 font-bold"
        >
          <span>Submit Airport Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
