import React from 'react';
import Link from 'next/link';
import { Plane, Clock, ShieldCheck, Moon, Shirt, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function AirportEmployeeAccommodationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
          RGIA Airport Proximity • 4-8 Minutes
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          Aviation & Airport Shift Staff Accommodation
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Engineered for airline crew, ground handling staff (AISATS, Çelebi), cargo technicians, security, and GMR airport employees in Shamshabad. 24/7 entry, shift-friendly quiet zones, and laundry.
        </p>
      </div>

      {/* Airport Shift Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <Clock className="w-8 h-8 text-blue-400" />
          <h3 className="text-base font-bold text-white">24/7 Biometric Access</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Arrive or depart at any hour for early morning flight turnarounds or late-night cargo shifts with round-the-clock security.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <Moon className="w-8 h-8 text-blue-400" />
          <h3 className="text-base font-bold text-white">Quiet Sleeping Zones</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Curfew on noise during daytime hours in dedicated shift rooms so rotational night-shift workers sleep undisturbed.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <Shirt className="w-8 h-8 text-blue-400" />
          <h3 className="text-base font-bold text-white">Uniform Laundry & Iron</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Commercial automatic washing machines and steam iron points to maintain crisp airline uniforms and badges.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <Plane className="w-8 h-8 text-blue-400" />
          <h3 className="text-base font-bold text-white">Quick RGIA Commute</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Located directly on the airport road corridor with easy auto, cab, and employee bus pick-up connectivity.
          </p>
        </div>
      </div>

      {/* Companies We House */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
        <h3 className="text-2xl font-bold text-white">
          Aviation Entities & Employers Near DEVI Hostels
        </h3>
        <p className="text-slate-300 text-sm">
          We proudly host staff and crew members working with leading airport organizations:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs font-semibold text-slate-200">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            IndiGo (InterGlobe)
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            Air India & Air India Express
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            AISATS Ground Handling
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            Çelebi Aviation Cargo
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            GMR Airport Operations
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            SpiceJet & Akasa Air
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            Flight Kitchen & Catering
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            Airport Security & Retail
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <Link
          href="/enquiry?category=airport_employee"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-xl transition-all hover:scale-105"
        >
          <span>Submit Airport Employee Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
