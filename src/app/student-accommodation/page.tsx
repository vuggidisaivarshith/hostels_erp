import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Utensils, Wifi, ShieldCheck, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';

export default function StudentAccommodationPage() {
  const studentFriendlyBranches = DEVI_BRANCHES.filter(
    (b) => b.branch_code === 1 || b.branch_code === 3 || b.branch_code === 5
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#F5F1E9]">
      {/* Short Hero */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          STUDENT ACCOMMODATION
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          Student Living in Shamshabad
        </h1>
        <p className="text-[#263447] text-sm leading-relaxed">
          Structured for collegiate focus: home-cooked meals, high-speed fiber Wi-Fi, individual study desks, and round-the-clock security.
        </p>
      </div>

      {/* Student Benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <Utensils className="w-5 h-5 text-[#D6A85F]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">3 Fresh Meals</h3>
          <p className="text-[11px] text-[#718096]">Daily South & North Indian nutritious buffet.</p>
        </div>
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <Wifi className="w-5 h-5 text-[#D6A85F]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">Fiber Wi-Fi</h3>
          <p className="text-[11px] text-[#718096]">High-speed internet for online coursework.</p>
        </div>
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <BookOpen className="w-5 h-5 text-[#D6A85F]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">Study Desks</h3>
          <p className="text-[11px] text-[#718096]">Personal desks and peaceful atmosphere.</p>
        </div>
        <div className="card-editorial p-4 bg-[#FFFFFF] border border-[#E5E0D7] space-y-2">
          <ShieldCheck className="w-5 h-5 text-[#477B70]" />
          <h3 className="font-serif text-xs font-bold text-[#142B45]">24/7 Safety</h3>
          <p className="text-[11px] text-[#718096]">CCTV, on-site wardens & verified entry.</p>
        </div>
      </div>

      {/* Genuine Photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card-editorial overflow-hidden bg-white">
          <div className="relative aspect-4/3 w-full bg-[#142B45]">
            <Image
              src="/images/branches/branch1-main.svg"
              alt="Devi Mansion Student Elevation"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="font-serif text-xs font-bold text-[#142B45]">Devi Mansion Flagship</p>
            <p className="text-[10px] text-[#718096]">Street 8, Rallaguda Road</p>
          </div>
        </div>

        <div className="card-editorial overflow-hidden bg-white">
          <div className="relative aspect-4/3 w-full bg-[#142B45]">
            <Image
              src="/images/branches/room-boys-1.svg"
              alt="Student Study Room"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="font-serif text-xs font-bold text-[#142B45]">Study Room Layout</p>
            <p className="text-[10px] text-[#718096]">Individual Bed & Attached Bath</p>
          </div>
        </div>

        <div className="card-editorial overflow-hidden bg-white col-span-2 md:col-span-1">
          <div className="relative aspect-4/3 w-full bg-[#142B45]">
            <Image
              src="/images/branches/branch5-main.svg"
              alt="Girls Student Enclave"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="font-serif text-xs font-bold text-[#142B45]">Girls Enclave</p>
            <p className="text-[10px] text-[#718096]">Gated High-Security Branch 5</p>
          </div>
        </div>
      </div>

      {/* Relevant Branches — Each appears only once */}
      <div className="space-y-4">
        <div className="border-b border-[#E5E0D7] pb-2">
          <h2 className="font-serif text-xl font-bold text-[#142B45]">
            Student-Focused Branches
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentFriendlyBranches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </div>

      {/* One Enquiry Section */}
      <div className="card-editorial p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E0D7] text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="font-serif text-xl font-bold text-[#142B45]">
          Enquire for Upcoming Semester Admissions
        </h3>
        <p className="text-xs text-[#718096]">
          Secure bed reservations before academic terms begin. Generate your reference number instantly.
        </p>
        <Link
          href="/enquiry?category=student"
          className="btn-champagne-gold py-3 px-8 text-xs inline-flex items-center gap-2"
        >
          <span>Submit Student Admission Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
