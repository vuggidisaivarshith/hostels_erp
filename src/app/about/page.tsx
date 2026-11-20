import React from 'react';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Building2, MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          About DEVI Hostels
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          A Legacy of Hospitality, Safety & Home-Like Comfort
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Operating in Shamshabad, Hyderabad under the leadership of <strong>MARPINA PRADEEP</strong>, DEVI HOSTELS provides five premier, tech-enabled hostel branches built for students and airport professionals.
        </p>
      </div>

      {/* Leadership Profile */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-amber-500 to-amber-300 mx-auto flex items-center justify-center text-slate-950 font-black text-4xl shadow-xl">
              MP
            </div>
            <h3 className="text-2xl font-bold text-white mt-4">MARPINA PRADEEP</h3>
            <p className="text-xs font-bold uppercase text-amber-400 tracking-wider">Founder & Managing Director</p>
            <p className="text-xs text-slate-400 mt-1">DEVI HOSTELS Network</p>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h4 className="text-2xl font-bold text-white">
              “Building Trust in Shamshabad Since Day One”
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              When we established DEVI HOSTELS in Shamshabad, our goal was simple: solve the acute shortage of clean, secure, and honestly priced living spaces for students attending local colleges and shift workers serving Rajiv Gandhi International Airport (RGIA).
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Today, DEVI HOSTELS has grown into a centralized network of five branches — four dedicated Boys Hostels and one high-security exclusive Girls Hostel. Every branch operates under our personal supervision, strict biometric access protocols, nutritious home-style mess dining, and transparent digital management.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-500" /> Shamshabad, Hyderabad</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-amber-500" /> +91 98480 12345</span>
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-amber-500" /> contact@devihostels.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white">Uncompromised Security</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            All 5 branches are equipped with 24/7 CCTV surveillance, biometric access gates, police-verified wardens, and exclusive female security staff for Girls Hostel Branch 1.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white">Homely South & North Indian Food</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            We cook 3 wholesome meals every single day in spotlessly sanitized commercial kitchens. Unlimited food, clean RO drinking water, and special Sunday feasts.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white">Unified Centralized Management</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            A single, modern ERP system governs all 5 branches. Permanent DEVI Resident IDs, automated joining-date rent invoices, and transparent online payments.
          </p>
        </div>
      </div>

      {/* Branch Summary Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">The DEVI Hostels 5-Branch Network</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVI_BRANCHES.map((b) => (
            <div key={b.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-400 bg-slate-950 px-2 py-0.5 rounded">
                  Branch Code {b.branch_code}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {b.total_floors} Floors
                </span>
              </div>
              <h4 className="text-base font-bold text-white">{b.name}</h4>
              <p className="text-xs text-slate-400">{b.address_line1}, {b.city}</p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-amber-400 font-semibold">{b.distance_from_rgia}</span>
                <Link href={`/branches/${b.branch_code}`} className="text-xs font-bold text-white hover:underline">
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
