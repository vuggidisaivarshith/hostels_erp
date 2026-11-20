import React from 'react';
import Link from 'next/link';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';
import {
  Building2,
  GraduationCap,
  Plane,
  ShieldCheck,
  Utensils,
  Wifi,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle,
  Phone,
  Bed,
  Layers,
  HeartHandshake
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Shamshabad’s Premier Multi-Branch Hostel Network
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Comfortable, Secure & Modern Living at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                DEVI HOSTELS
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Operating <strong>5 dedicated branches</strong> in Shamshabad, Hyderabad. Crafted specifically for <strong>College Students</strong> and <strong>RGIA Airport Staff</strong> with 3-times homely food, high-speed Wi-Fi, and 24/7 security.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquiry"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Book a Bed / Admission Enquiry</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/branches"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Building2 className="w-5 h-5 text-amber-400" />
                Explore 5 Branches
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-800/80 text-left">
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <p className="text-2xl font-black text-amber-400">5</p>
                <p className="text-xs text-slate-400 font-medium">Distinct Branches (4 Boys + 1 Girls)</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <p className="text-2xl font-black text-amber-400">4-8 Min</p>
                <p className="text-xs text-slate-400 font-medium">Drive to RGIA Passenger & Cargo Gates</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <p className="text-2xl font-black text-amber-400">3 Meals</p>
                <p className="text-xs text-slate-400 font-medium">Fresh South & North Indian Daily Buffet</p>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <p className="text-2xl font-black text-amber-400">24/7</p>
                <p className="text-xs text-slate-400 font-medium">Biometric Security & Power Backup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PRIMARY AUDIENCES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            Targeted Accommodations
          </h2>
          <h3 className="text-3xl font-extrabold text-white">
            Custom-Built Living for Our Core Residents
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: College Students */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 transition-all shadow-xl flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                  Campus Life & Studies
                </span>
                <h4 className="text-2xl font-bold text-white mt-1">
                  For College & Aviation Students
                </h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Close to top engineering, degree, and aviation institutes in Shamshabad. Quiet study spaces, high-speed 100 Mbps Wi-Fi, wholesome nutritious meals, study desks, and strict zero-ragging safety.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Wholesome student diet with daily milk, eggs & special Sunday lunches
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Quiet library zones and group discussion areas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Regular parent communication and warden supervision
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <Link
                href="/student-accommodation"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Explore Student Accommodation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Airport Employees */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 transition-all shadow-xl flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Plane className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-blue-400 tracking-wider">
                  Aviation & Shift Workers
                </span>
                <h4 className="text-2xl font-bold text-white mt-1">
                  For RGIA Airport Employees & Airline Staff
                </h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Tailored for IndiGo, Air India, SpiceJet, GMR, AISATS, and Çelebi staff. 24/7 flexible hot water, noise-insulated sleeping rooms for day rest after night shifts, and flexible dining timings.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Just 4 to 8 minutes transit to RGIA Passenger & Cargo terminals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Rotational shift friendly with 24/7 biometric entry
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Daily uniform laundry and ironing stations
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <Link
                href="/airport-employee-accommodation"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Explore Airport Staff Living <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 5 BRANCHES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Centralized Management
            </h2>
            <h3 className="text-3xl font-extrabold text-white">
              Our 5 Branches in Shamshabad
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Select your ideal branch based on location, gender category, and proximity to your college or airport terminal.
            </p>
          </div>
          <Link
            href="/branches"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300"
          >
            View All 5 Branches & Floor Plans <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEVI_BRANCHES.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>

      {/* OWNER & HOSPITALITY COMMITMENT */}
      <section className="bg-slate-900 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 mx-auto flex items-center justify-center text-slate-950 font-black text-3xl shadow-xl">
                MP
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">MARPINA PRADEEP</h4>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Proprietor & Managing Director
                </p>
                <p className="text-xs text-slate-400 mt-1">DEVI HOSTELS Network</p>
              </div>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-1 text-left">
                <p>📍 Shamshabad, Hyderabad, Telangana</p>
                <p>📞 Direct: +91 98480 12345</p>
                <p>✉️ contact@devihostels.com</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                <HeartHandshake className="w-4 h-4" />
                The DEVI Hostels Promise
              </div>

              <h3 className="text-3xl font-extrabold text-white leading-tight">
                “Every resident is treated with the care, warmth and safety of our own family.”
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you are a student stepping away from home for the first time to pursue an engineering or aviation degree, or an airport employee working demanding rotational shifts at Rajiv Gandhi International Airport, DEVI HOSTELS is engineered to be your secure second home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Hidden Costs:</strong> Rent includes food, Wi-Fi, electricity backup, and water.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Lady Warden:</strong> High-security exclusive Girls Branch 1 with round-the-clock female guards.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Transparent Accounting:</strong> Unique DEVI Resident ID, automated monthly receipts, and online UPI payments.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Hygiene First:</strong> Daily deep sanitization of bathrooms, dining halls, and water filters.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION ADMISSION ENQUIRY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-8 sm:p-12 text-slate-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight text-white">
              Ready to secure your room in Shamshabad?
            </h3>
            <p className="text-amber-100 text-sm font-medium">
              Submit an online admission enquiry in under 2 minutes. Our team will verify bed availability across all 5 branches and arrange an immediate room tour.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/enquiry"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-xl transition-all text-center"
            >
              Start Admission Form
            </Link>
            <a
              href="tel:+919848012345"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm transition-colors text-center"
            >
              Call: +91 98480 12345
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
