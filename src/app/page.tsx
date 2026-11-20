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
  HeartHandshake,
  Dumbbell,
  Car,
  Star,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20 bg-[#FAFAF9]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 badge-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>01 / SHAMSHABAD LUXURY ACCOMMODATION NETWORK</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] tracking-tight leading-[1.08]">
              Delivering <span className="italic text-[#365679] font-medium">Exceptional Living</span> for Students & RGIA Aviation Staff.
            </h1>

            <p className="text-base sm:text-lg text-[#334155] max-w-2xl mx-auto font-normal leading-relaxed">
              Operating <strong>5 premier branches</strong> in Shamshabad, Hyderabad under Proprietor <strong>MARPINA PRADEEP</strong>. Featuring <strong>DEVI MANSION (The Boys Town)</strong> with attached washrooms, in-house gym, vehicle parking, and 3-times daily homely food.
            </p>

            {/* CTAs matching IDM Inky */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/enquiry" className="btn-primary-ink py-3.5 px-7 text-xs w-full sm:w-auto">
                <span>Book a Bed / Admission Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919989897705?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald-cta py-3.5 px-6 text-xs w-full sm:w-auto"
              >
                <span>WhatsApp: +91 99898 97705</span>
              </a>
              <Link href="/branches" className="btn-ghost-luxury py-3.5 px-6 text-xs w-full sm:w-auto">
                Explore 5 Branches
              </Link>
            </div>

            {/* Telemetry Strip */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-200 text-left">
              <div className="card-glass p-4 rounded-xl">
                <span className="badge-mono text-[9px] mb-1">NETWORK</span>
                <p className="font-serif text-2xl font-bold text-[#0F172A]">5 Branches</p>
                <p className="text-xs text-[#64748B] mt-0.5">4 Boys Hostels + 1 Girls Enclave</p>
              </div>
              <div className="card-glass p-4 rounded-xl">
                <span className="badge-mono text-[9px] mb-1">PROXIMITY</span>
                <p className="font-serif text-2xl font-bold text-[#0F172A]">4-8 Mins</p>
                <p className="text-xs text-[#64748B] mt-0.5">Drive to RGIA Passenger & Cargo Gates</p>
              </div>
              <div className="card-glass p-4 rounded-xl">
                <span className="badge-mono text-[9px] mb-1">CUISINE</span>
                <p className="font-serif text-2xl font-bold text-[#0F172A]">3 Meals</p>
                <p className="text-xs text-[#64748B] mt-0.5">South & North Indian + Shift Packs</p>
              </div>
              <div className="card-glass p-4 rounded-xl">
                <span className="badge-mono text-[9px] mb-1">VERIFIED</span>
                <p className="font-serif text-2xl font-bold text-emerald-600">4.8 ★ Google</p>
                <p className="text-xs text-[#64748B] mt-0.5">Devi Luxury Boys Hostel / Mansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED: DEVI MANSION (THE BOYS TOWN) SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-editorial p-8 sm:p-12 bg-white rounded-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-mono bg-[#0F172A] text-white border-0">FLAGSHIP FACILITY</span>
                <span className="badge-mono">STREET 8, MADHURA NAGAR, SHAMSHABAD</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
                Devi Luxury Boys Hostel & Devi Mansion{' '}
                <span className="italic text-[#365679] font-medium">(The Boys Town)</span>
              </h2>

              <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                Our newly constructed flagship building in Shamshabad features expansive rooms with attached luxury washrooms, a dedicated in-house fitness gym, vehicle parking, and high-speed Wi-Fi. Located just off Rallaguda Road, it is the top choice for pilots, airline crew, GMR personnel, and university students.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <Dumbbell className="w-5 h-5 text-amber-600 mb-1" />
                  <p className="font-bold text-xs text-[#0F172A]">Free On-Site Gym</p>
                  <p className="text-[11px] text-[#64748B]">Fitness equipment</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <Car className="w-5 h-5 text-blue-600 mb-1" />
                  <p className="font-bold text-xs text-[#0F172A]">Vehicle Parking</p>
                  <p className="text-[11px] text-[#64748B]">Bike & car spaces</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <Utensils className="w-5 h-5 text-emerald-600 mb-1" />
                  <p className="font-bold text-xs text-[#0F172A]">Homely Mess</p>
                  <p className="text-[11px] text-[#64748B]">3 meals + airport packs</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://share.google/iCW7Zy3mRxZL94HtS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-ink text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Google Business Profile
                </a>
                <a
                  href="https://www.instagram.com/devi_mansion_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-luxury text-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-rose-600" />
                  Instagram @devi_mansion_
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-xl bg-slate-900 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-mono text-xs uppercase text-amber-400 font-bold tracking-wider">
                    Quick Admission Factsheet
                  </span>
                  <span className="text-xs text-emerald-400 font-bold">● Active Intake</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monthly Rent:</span>
                    <span className="font-mono font-bold text-white">Starting ₹6,500 - ₹8,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sharing Options:</span>
                    <span className="font-bold text-slate-200">1, 2, 3, 4 Sharing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Security Deposit:</span>
                    <span className="font-bold text-slate-200">100% Refundable Escrow</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Operating Hours:</span>
                    <span className="font-bold text-emerald-400">Open 24 Hours (Biometric Entry)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Contact Number:</span>
                    <a href="tel:+919989897705" className="font-mono font-bold text-amber-400 hover:underline">
                      +91 99898 97705
                    </a>
                  </div>
                </div>

                <Link href="/enquiry" className="btn-emerald-cta w-full py-3 text-center text-xs">
                  Apply Online for Bed Allocation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PRIMARY AUDIENCES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-mono mb-2">TARGETED ACCOMMODATIONS</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Engineered Specifically for <span className="italic text-[#365679]">Our Core Residents</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Pillar */}
          <div className="card-glass p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="badge-mono">ACADEMIC EXCELLENCE</span>
              <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
                College & University Students
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Quiet study atmospheres, dedicated study desks, high-speed dual Wi-Fi networks, and nutritious 3-times daily homely buffet. Near engineering, degree, and aviation training colleges in Shamshabad.
              </p>
              <ul className="space-y-2 text-xs text-[#334155] font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Morning tea, breakfast, lunch, and dinner buffet
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> High-speed Wi-Fi with zero lag for exams & projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Safe, disciplined environment with biometric access
                </li>
              </ul>
            </div>
            <Link href="/student-accommodation" className="btn-primary-ink text-xs self-start">
              Explore Student Housing →
            </Link>
          </div>

          {/* Airport Staff Pillar */}
          <div className="card-glass p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold">
                <Plane className="w-6 h-6" />
              </div>
              <span className="badge-mono">RGIA AVIATION CORRIDOR</span>
              <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
                RGIA Airport & Airline Employees
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Built specifically for rotational airport shifts. Flexible meal timings, early morning food packet pickups, 24/7 entry, blackout curtains for daytime sleep, and 4-8 minute travel time to passenger and cargo gates.
              </p>
              <ul className="space-y-2 text-xs text-[#334155] font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Early-morning and late-night food packet service
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> 24/7 biometric entry for unpredictable flight shifts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> 4-8 mins to RGIA passenger terminal & cargo gates
                </li>
              </ul>
            </div>
            <Link href="/airport-employee-accommodation" className="btn-primary-ink text-xs self-start">
              Explore Airport Staff Quarters →
            </Link>
          </div>
        </div>
      </section>

      {/* 5 BRANCH NETWORK OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="badge-mono mb-2">CENTRALIZED NETWORK</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Our Five Distinct <span className="italic text-[#365679]">Branches</span>
            </h2>
            <p className="text-sm text-[#334155] max-w-xl mt-1">
              One centralized management system under Proprietor MARPINA PRADEEP. Permanent DEVI Resident IDs across all branches.
            </p>
          </div>
          <Link href="/branches" className="btn-ghost-luxury text-xs self-start md:self-auto">
            View All Branch Details →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVI_BRANCHES.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>

      {/* RESIDENT SELF-SERVICE PORTAL CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass p-8 sm:p-12 rounded-3xl border-2 border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="badge-mono">24/7 DIGITAL RESIDENT PORTAL</span>
              <h2 className="font-serif text-3xl font-bold text-[#0F172A]">
                Self-Service Dashboard for Every Resident
              </h2>
              <p className="text-sm text-[#334155] leading-relaxed">
                Log in using your registered mobile number + OTP or permanent Resident ID (<code className="font-mono text-xs font-bold bg-slate-100 px-1.5 py-0.5 rounded">DV[B]-[F]-[XXXXX]</code>). View monthly invoices, make instant UPI payments, track advance balances, and submit maintenance tickets.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link href="/resident/login" className="btn-primary-ink text-xs">
                  Resident Login →
                </Link>
                <Link href="/faqs" className="btn-ghost-luxury text-xs">
                  FAQs & Portal Guide
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-[#0F172A]">RESIDENT DEMO PROFILE</span>
                <span className="text-emerald-600 font-bold">● Active</span>
              </div>
              <p className="text-slate-500">ID: <strong className="text-[#0F172A]">DV1-1-00001</strong></p>
              <p className="text-slate-500">Name: <strong className="text-[#0F172A]">Aditya Sai Krishna</strong></p>
              <p className="text-slate-500">Branch: <strong className="text-[#0F172A]">Branch 1 (Room 101 - Bed A)</strong></p>
              <p className="text-slate-500">Rent: <strong className="text-emerald-700">₹7,000 / month</strong></p>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                Individual joining-date cycle with instant digital receipt generation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
