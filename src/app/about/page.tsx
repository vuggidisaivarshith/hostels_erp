import React from 'react';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Building2, MapPin, Phone, Mail, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { DEVI_BRANCHES, VERIFIED_CONTACTS } from '@/lib/data/branches';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#F5F1E9]">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          ABOUT DEVI HOSTELS & DEVI MANSION
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#142B45] leading-tight">
          A Commitment to Safety, Community & <span className="italic text-[#142B45] font-medium">Home-Like Comfort</span>
        </h1>
        <p className="text-[#263447] text-base leading-relaxed">
          Operating in Shamshabad, Hyderabad under the leadership of Proprietor <strong>{VERIFIED_CONTACTS.owner_proprietor}</strong>, DEVI HOSTELS provides five premier hostel branches built for students and RGIA aviation professionals.
        </p>
      </div>

      {/* Leadership Profile */}
      <div className="card-editorial p-8 sm:p-12 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D7] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-28 h-28 rounded-2xl bg-[#142B45] text-[#FFFFFF] mx-auto flex items-center justify-center font-serif font-bold text-3xl shadow-xs border border-[#1F3C5F]">
              MP
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#142B45] mt-4">{VERIFIED_CONTACTS.owner_proprietor}</h3>
            <p className="font-mono text-xs font-bold uppercase text-[#D6A85F] tracking-wider">Founder & Proprietor</p>
            <p className="text-xs text-[#718096] mt-0.5">DEVI HOSTELS & DEVI MANSION Network</p>
            <div className="pt-3 flex justify-center gap-2">
              <a
                href={VERIFIED_CONTACTS.instagram_profile}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-mono text-[9px] hover:border-[#142B45]"
              >
                <InstagramIcon className="w-3 h-3 text-[#D6A85F]" /> {VERIFIED_CONTACTS.instagram_handle}
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B45]">
              “Building Trust & Comfort in Shamshabad Since Day One”
            </h4>
            <p className="text-sm text-[#263447] leading-relaxed">
              When we established DEVI HOSTELS in Shamshabad, our goal was simple: provide clean, secure, and honestly priced living spaces for students attending local colleges and shift workers serving Rajiv Gandhi International Airport (RGIA).
            </p>
            <p className="text-sm text-[#263447] leading-relaxed">
              Today, DEVI HOSTELS operates five centralized branches — four dedicated Boys Hostels including the flagship <strong>Devi Mansion (The Boys Town)</strong> with on-site gym and vehicle parking, and one exclusive high-security Girls Hostel. Every resident receives a permanent unique Resident ID and individual joining-date billing.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#718096] border-t border-[#E5E0D7] font-mono">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D6A85F]" /> Shamshabad, Hyderabad</span>
              <a href={`tel:${VERIFIED_CONTACTS.primary_phone}`} className="flex items-center gap-1.5 hover:text-[#142B45] font-bold text-[#142B45]">
                <Phone className="w-4 h-4 text-[#477B70]" /> {VERIFIED_CONTACTS.primary_phone}
              </a>
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#D6A85F]" /> admissions@devihostels.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-editorial p-6 rounded-xl bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#F5F1E9] text-[#142B45] flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6 text-[#D6A85F]" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#142B45]">Uncompromised Security</h4>
          <p className="text-xs text-[#718096] leading-relaxed">
            Round-the-clock CCTV coverage, biometric entry, responsible wardens, and strict visitor control.
          </p>
        </div>

        <div className="card-editorial p-6 rounded-xl bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#F5F1E9] text-[#142B45] flex items-center justify-center font-bold">
            <HeartHandshake className="w-6 h-6 text-[#477B70]" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#142B45]">Homely Dining Culture</h4>
          <p className="text-xs text-[#718096] leading-relaxed">
            Fresh, hygienic meals cooked 3 times daily with early morning and late night packed options for airport shift staff.
          </p>
        </div>

        <div className="card-editorial p-6 rounded-xl bg-[#FFFFFF] border border-[#E5E0D7] space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#F5F1E9] text-[#142B45] flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6 text-[#D6A85F]" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#142B45]">Modern Infrastructure</h4>
          <p className="text-xs text-[#718096] leading-relaxed">
            In-house gym at Devi Mansion, vehicle parking, 24/7 hot water, high-speed Wi-Fi, and heavy-duty power backup.
          </p>
        </div>
      </div>
    </div>
  );
}
