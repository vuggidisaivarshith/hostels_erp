import React from 'react';
import Link from 'next/link';
import { GraduationCap, BookOpen, Utensils, Wifi, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function StudentAccommodationPage() {
  const studentFriendlyBranches = DEVI_BRANCHES.filter(
    (b) => b.branch_code === 3 || b.branch_code === 1 || b.branch_code === 5
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          Student Living & Campus Hostels
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          Dedicated Student Accommodation in Shamshabad
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Crafted to support collegiate success. Healthy home-cooked dining, 100 Mbps fiber internet for academic coursework, quiet study environments, and round-the-clock security.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <Utensils className="w-8 h-8 text-amber-500" />
          <h3 className="text-base font-bold text-white">3-Times Homely Food</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Nutritious South & North Indian meals prepared with fresh ingredients. Daily milk, breakfast, lunch, and dinner.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <Wifi className="w-8 h-8 text-amber-500" />
          <h3 className="text-base font-bold text-white">High-Speed Wi-Fi</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Fiber-optic unlimited broadband across all floors and study halls for uninterrupted study and exams.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <BookOpen className="w-8 h-8 text-amber-500" />
          <h3 className="text-base font-bold text-white">Quiet Study Desks</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ergonomic individual study tables, book racks, and silent reading zones during semester exams.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <ShieldCheck className="w-8 h-8 text-amber-500" />
          <h3 className="text-base font-bold text-white">Parent Peace of Mind</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Strict biometric attendance, resident wardens, 24/7 CCTV, and direct emergency communication lines.
          </p>
        </div>
      </div>

      {/* Nearby Colleges in Shamshabad */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
        <h3 className="text-2xl font-bold text-white">
          Convenient Transit to Nearby Educational Institutions
        </h3>
        <p className="text-slate-300 text-sm">
          DEVI Hostels branches are located with direct bus and auto access to major educational campuses:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-slate-200">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Vardhaman College of Engineering</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Rajiv Gandhi Aviation Academy</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Asia Pacific Flight Training Academy</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Professor Jayashankar Agriculture University</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>GMR Aviation Academy RGIA</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Shamshabad Degree & Junior Colleges</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <Link
          href="/enquiry?category=student"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-xl transition-all hover:scale-105"
        >
          <span>Submit Student Admission Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
