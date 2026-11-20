import React from 'react';
import Link from 'next/link';
import { GraduationCap, BookOpen, Utensils, Wifi, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';

export default function StudentAccommodationPage() {
  const studentFriendlyBranches = DEVI_BRANCHES.filter(
    (b) => b.branch_code === 1 || b.branch_code === 3 || b.branch_code === 5
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 bg-[#F5F1E9]">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          STUDENT COMMUNITY LIVING
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          Student Accommodation in Shamshabad
        </h1>
        <p className="text-[#263447] text-sm sm:text-base leading-relaxed">
          Crafted to support collegiate success. Healthy home-cooked dining, fiber internet for coursework, quiet study environments, and round-the-clock security.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <Utensils className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">3-Times Homely Food</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Nutritious South & North Indian meals prepared fresh daily with quality ingredients.
          </p>
        </div>

        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <Wifi className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">High-Speed Wi-Fi</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Fiber-optic unlimited broadband across all floors for uninterrupted study and online exams.
          </p>
        </div>

        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <BookOpen className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">Quiet Study Desks</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Comfortable individual study desks, book racks, and peaceful atmosphere during exams.
          </p>
        </div>

        <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <ShieldCheck className="w-7 h-7 text-[#D6A85F]" />
          <h3 className="font-serif text-base font-bold text-[#142B45]">Parent Peace of Mind</h3>
          <p className="text-xs text-[#718096] leading-relaxed">
            Biometric attendance, resident wardens, 24/7 CCTV, and direct emergency contact lines.
          </p>
        </div>
      </div>

      {/* Recommended Branches for Students */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#142B45] text-center">
          Recommended Branches for Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentFriendlyBranches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/enquiry?category=student"
          className="btn-primary-navy py-3 px-8 text-xs inline-flex items-center gap-2"
        >
          <span>Submit Student Admission Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
