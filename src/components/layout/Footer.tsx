'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { DEVI_BRANCHES, VERIFIED_CONTACTS } from '@/lib/data/branches';

export default function Footer() {
  return (
    <footer className="bg-[#142B45] text-[#E5E0D7] border-t border-[#1F3C5F]">
      {/* Upper Highlight Banner on warm ivory canvas */}
      <div className="bg-[#F5F1E9] text-[#142B45] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D7]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="badge-mono mb-2 border-[#D6A85F] text-[#142B45]">
              PREMIER LIVING IN SHAMSHABAD
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B45] mt-1">
              Looking for modern, comfortable accommodation near RGIA?
            </h3>
            <p className="text-[#263447] text-sm max-w-2xl mt-1.5 leading-relaxed">
              Attached bathrooms, free on-site fitness gym, dedicated vehicle parking, 3-times daily homely food, and 24/7 security. Just minutes from Rajiv Gandhi International Airport and major Shamshabad colleges.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/enquiry" className="btn-primary-navy py-3 px-6 text-xs">
              Admission Enquiry <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`https://wa.me/${VERIFIED_CONTACTS.whatsapp_number}?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-cta py-3 px-5 text-xs"
            >
              WhatsApp Us
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
              <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] text-[#142B45] flex items-center justify-center font-serif text-lg font-bold border border-[#E5E0D7]">
                DM
              </div>
              <div>
                <span className="font-serif text-lg text-[#FFFFFF] font-bold tracking-tight">
                  DEVI HOSTELS
                </span>
                <p className="font-mono text-[10px] tracking-wider text-[#D6A85F] uppercase">
                  DEVI MANSION (The Boys Town)
                </p>
              </div>
            </div>
            <p className="text-xs text-[#E5E0D7]/80 leading-relaxed">
              Proprietor: <strong className="text-[#FFFFFF] font-semibold">{VERIFIED_CONTACTS.owner_proprietor}</strong>. Operating five premier hostel branches tailored for RGIA airport professionals and college students in Shamshabad, Hyderabad.
            </p>
            <div className="pt-2 text-xs text-[#E5E0D7]/80 space-y-1 font-mono">
              <p>
                <strong className="text-[#FFFFFF]">Google Listing:</strong> {VERIFIED_CONTACTS.google_rating}
              </p>
              <a
                href={VERIFIED_CONTACTS.instagram_profile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#D6A85F] hover:underline pt-1"
              >
                <InstagramIcon className="w-3.5 h-3.5" /> Follow {VERIFIED_CONTACTS.instagram_handle}
              </a>
            </div>
          </div>

          {/* Col 2: The 5 Branches */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-bold border-b border-[#1F3C5F] pb-2">
              Our 5 Branches
            </h4>
            <ul className="space-y-2 text-xs">
              {DEVI_BRANCHES.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/branches/${b.branch_code}`}
                    className="hover:text-[#FFFFFF] transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {b.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#D6A85F]">
                      Code {b.branch_code}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-bold border-b border-[#1F3C5F] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/branches" className="hover:text-[#FFFFFF] transition-colors">
                  Explore All 5 Branches →
                </Link>
              </li>
              <li>
                <Link href="/student-accommodation" className="hover:text-[#FFFFFF] transition-colors">
                  Student Accommodation & Dining
                </Link>
              </li>
              <li>
                <Link href="/airport-employee-accommodation" className="hover:text-[#FFFFFF] transition-colors">
                  Airport Professionals Shift Quarters
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#FFFFFF] transition-colors">
                  Hostel Amenities & Gym
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FFFFFF] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/resident/login" className="hover:text-[#FFFFFF] transition-colors">
                  Resident Login →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF] font-bold border-b border-[#1F3C5F] pb-2">
              Verified Office Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#E5E0D7]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D6A85F] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {VERIFIED_CONTACTS.flagship_address}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#477B70] shrink-0" />
                <a href={`tel:${VERIFIED_CONTACTS.primary_phone}`} className="hover:text-[#FFFFFF] font-mono font-bold text-[#FFFFFF]">
                  {VERIFIED_CONTACTS.phones.join(' / ')}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D6A85F] shrink-0" />
                <span>admissions@devihostels.com</span>
              </div>
              <div className="pt-2">
                <a
                  href={VERIFIED_CONTACTS.google_knowledge_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-[#D6A85F] hover:underline font-bold"
                >
                  <ExternalLink className="w-3 h-3" /> View Google Maps & Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-[#1F3C5F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#E5E0D7]/60 gap-4">
          <p>© 2026 DEVI HOSTELS & DEVI MANSION. All rights reserved. Shamshabad, Hyderabad.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Proprietor: {VERIFIED_CONTACTS.owner_proprietor}</span>
            <Link href="/login" className="text-[#D6A85F] hover:underline">
              Portal Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
