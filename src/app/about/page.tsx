import React from 'react';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Building2, MapPin, Phone, Mail, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#FAFAF9]">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge-mono mb-2">ABOUT DEVI HOSTELS & DEVI MANSION</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
          A Legacy of Safety, Community & <span className="italic text-[#365679] font-medium">Home-Like Comfort</span>
        </h1>
        <p className="text-[#334155] text-base leading-relaxed">
          Operating in Shamshabad, Hyderabad under the leadership of Proprietor <strong>MARPINA PRADEEP</strong>, DEVI HOSTELS provides five premier, tech-enabled hostel branches built for students and RGIA aviation professionals.
        </p>
      </div>

      {/* Leadership Profile */}
      <div className="card-glass p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-32 h-32 rounded-2xl bg-[#0F172A] text-white mx-auto flex items-center justify-center font-serif font-bold text-4xl shadow-md border border-[#1E293B]">
              MP
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] mt-4">MARPINA PRADEEP</h3>
            <p className="font-mono text-xs font-bold uppercase text-[#365679] tracking-wider">Founder & Proprietor</p>
            <p className="text-xs text-[#64748B] mt-0.5">DEVI HOSTELS & DEVI MANSION Network</p>
            <div className="pt-3 flex justify-center gap-2">
              <a
                href="https://www.instagram.com/devi_mansion_/"
                target="_blank"
                rel="noopener noreferrer"
                className="badge-mono text-[9px] hover:border-[#0F172A]"
              >
                <InstagramIcon className="w-3 h-3 text-rose-600" /> @devi_mansion_
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
              “Building Trust & Comfort in Shamshabad Since Day One”
            </h4>
            <p className="text-sm text-[#334155] leading-relaxed">
              When we established DEVI HOSTELS in Shamshabad, our goal was simple: solve the acute shortage of clean, secure, and honestly priced living spaces for students attending local colleges and shift workers serving Rajiv Gandhi International Airport (RGIA).
            </p>
            <p className="text-sm text-[#334155] leading-relaxed">
              Today, DEVI HOSTELS operates five centralized branches — four dedicated Boys Hostels including the flagship <strong>Devi Mansion (The Boys Town)</strong> with on-site gym and vehicle parking, and one exclusive high-security Girls Hostel. Every resident receives a permanent unique Resident ID and individual joining-date billing.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#64748B] border-t border-slate-200 font-mono">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-600" /> Shamshabad, Hyderabad</span>
              <a href="tel:+919989897705" className="flex items-center gap-1.5 hover:text-[#0F172A] font-bold text-[#0F172A]">
                <Phone className="w-4 h-4 text-emerald-600" /> +91 99898 97705
              </a>
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-blue-600" /> admissions@devihostels.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-glass p-6 rounded-2xl bg-white space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#0F172A]">Uncompromised Security</h4>
          <p className="text-xs text-[#334155] leading-relaxed">
            Round-the-clock CCTV coverage, biometric entry, responsible wardens, and strict visitor control.
          </p>
        </div>

        <div className="card-glass p-6 rounded-2xl bg-white space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#0F172A]">Homely Dining Culture</h4>
          <p className="text-xs text-[#334155] leading-relaxed">
            Fresh, hygienic meals cooked 3 times daily with early morning and late night packed options for airport shift staff.
          </p>
        </div>

        <div className="card-glass p-6 rounded-2xl bg-white space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#0F172A]">Modern Infrastructure</h4>
          <p className="text-xs text-[#334155] leading-relaxed">
            In-house gym at Devi Mansion, vehicle parking, 24/7 hot water, high-speed Wi-Fi, and heavy-duty power backup.
          </p>
        </div>
      </div>
    </div>
  );
}
