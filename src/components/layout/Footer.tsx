'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Highlight Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Looking for verified accommodation in Shamshabad?
            </h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              Clean rooms, 3-times homely food, high-speed Wi-Fi, and 24/7 biometric security just minutes away from Rajiv Gandhi International Airport (RGIA) and premier colleges.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105"
            >
              Apply for Admission
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919848012345"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call Management
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About DEVI Hostels */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-black text-lg">
                DH
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">DEVI HOSTELS</span>
                <p className="text-xs text-amber-400 font-medium">Shamshabad, Hyderabad</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Founded and managed by <strong>Marpina Pradeep</strong>, DEVI HOSTELS provides five premier hostel branches dedicated to college students, aviation personnel, and RGIA airport shift staff.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Owner:</strong> MARPINA PRADEEP</p>
              <p><strong className="text-slate-300">Hub:</strong> Shamshabad, Hyderabad, Telangana</p>
              <p><strong className="text-slate-300">Branches:</strong> 4 Boys Hostels + 1 Girls Hostel</p>
            </div>
          </div>

          {/* Col 2: Five Branches Directory */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Our 5 Branches
            </h4>
            <ul className="space-y-2.5 text-xs">
              {DEVI_BRANCHES.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/branches/${b.branch_code}`}
                    className="hover:text-amber-400 transition-colors flex items-start gap-2"
                  >
                    <span className="font-mono bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      DV{b.branch_code}
                    </span>
                    <div>
                      <span className="font-semibold text-slate-200">{b.name}</span>
                      <p className="text-[11px] text-slate-400">{b.gender_category === 'girls' ? 'Girls Only • High Security' : 'Boys Hostel'} • {b.total_floors} Floors</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About DEVI Hostels</Link>
              </li>
              <li>
                <Link href="/student-accommodation" className="hover:text-amber-400 transition-colors">Student Accommodation & Mess</Link>
              </li>
              <li>
                <Link href="/airport-employee-accommodation" className="hover:text-amber-400 transition-colors">RGIA Airport Staff Quarters</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-amber-400 transition-colors">Facilities & Amenities</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/resident/login" className="hover:text-amber-400 transition-colors">Resident Portal Login</Link>
              </li>
              <li>
                <Link href="/admin/enquiries" className="hover:text-amber-400 transition-colors">Staff & Management Login</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Contact & Location
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Main Administrative Office:</strong><br />
                  Opp. HP Petrol Bunk, Main Airport Approach Road, Shamshabad, Hyderabad, Telangana 501218, India.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Direct: <a href="tel:+919848012345" className="hover:text-white font-semibold text-slate-200">+91 98480 12345</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:contact@devihostels.com" className="hover:text-white">contact@devihostels.com</a>
              </li>
              <li className="flex items-center gap-2.5 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-medium">Police-Verified Premises & 24/7 CCTV</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 DEVI HOSTELS (Proprietor: Marpina Pradeep). All Rights Reserved. Shamshabad, Hyderabad.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Engineered for high comfort, safety & transparent management.
          </p>
        </div>
      </div>
    </footer>
  );
}
