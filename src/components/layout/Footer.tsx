'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      {/* Upper Highlight Banner on warm canvas */}
      <div className="bg-[#FAFAF9] text-[#0F172A] py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="badge-mono mb-2">Verified Luxury Living</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              Looking for modern, comfortable accommodation in <span className="italic text-[#365679]">Shamshabad</span>?
            </h3>
            <p className="text-[#334155] text-sm max-w-2xl mt-1.5 leading-relaxed">
              Attached washrooms, on-site gym, vehicle parking, 3-times daily homely food, and 24/7 security. Just minutes from Rajiv Gandhi International Airport (RGIA) and major colleges.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/enquiry" className="btn-primary-ink py-3 px-6 text-xs">
              Apply for Admission <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/919989897705?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-cta py-3 px-5 text-xs"
            >
              WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About DEVI Hostels & Devi Mansion */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white text-[#0F172A] flex items-center justify-center font-serif text-lg font-bold border border-slate-300">
                DM
              </div>
              <div>
                <span className="font-serif text-lg text-white font-bold tracking-tight">
                  DEVI HOSTELS
                </span>
                <p className="font-mono text-[10px] tracking-wider text-amber-400 uppercase">
                  DEVI MANSION (The Boys Town)
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Proprietor: <strong className="text-white font-semibold">MARPINA PRADEEP</strong>. Five premier hostel branches tailored for RGIA airport professionals and college students in Shamshabad, Hyderabad.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
              <p>
                <strong className="text-slate-300">Google Listing:</strong> Rated 4.8★
              </p>
              <a
                href="https://www.instagram.com/devi_mansion_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-400 hover:underline pt-1"
              >
                <InstagramIcon className="w-3.5 h-3.5" /> Follow @devi_mansion_
              </a>
            </div>
          </div>

          {/* Col 2: The 5 Branches */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold border-b border-slate-800 pb-2">
              Our 5 Branches
            </h4>
            <ul className="space-y-2 text-xs">
              {DEVI_BRANCHES.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/branches/${b.branch_code}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {b.name}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">
                      Code {b.branch_code}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold border-b border-slate-800 pb-2">
              Resident & Staff Access
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/resident/login" className="hover:text-white transition-colors">
                  Resident Self-Service Login →
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  Admin & Staff Portal →
                </Link>
              </li>
              <li>
                <Link href="/student-accommodation" className="hover:text-white transition-colors">
                  Student Housing & Food Plans
                </Link>
              </li>
              <li>
                <Link href="/airport-employee-accommodation" className="hover:text-white transition-colors">
                  Airport Staff 24/7 Shift Quarters
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white transition-colors">
                  Gym, WiFi & Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold border-b border-slate-800 pb-2">
              Central Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Street Number 8, Rallaguda Road, Madhura Nagar, Shamshabad, Hyderabad, Telangana — 501218
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919989897705" className="hover:text-white font-mono font-bold text-slate-200">
                  +91 99898 97705 / +91 94940 12345
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>admissions@devihostels.com</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://share.google/iCW7Zy3mRxZL94HtS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-emerald-400 hover:underline font-bold"
                >
                  <ExternalLink className="w-3 h-3" /> View on Google Maps / Reviews
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 DEVI HOSTELS & DEVI MANSION. All rights reserved. Shamshabad Central Office.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Proprietor: MARPINA PRADEEP</span>
            <Link href="/resident/login" className="text-slate-400 hover:text-white">
              Resident ID Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
