import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, UserCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          Contact DEVI HOSTELS Management
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Reach out directly to Owner <strong>Marpina Pradeep</strong> and our Shamshabad branch desk for room tours, immediate check-ins, or admission enquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">
              Central Administration Office
            </h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">Physical Address:</strong>
                  Opp. HP Petrol Bunk, Main Airport Approach Road, Shamshabad, Hyderabad, Telangana 501218, India.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">Phone (Call / WhatsApp):</strong>
                  <a href="tel:+919848012345" className="text-amber-400 font-bold hover:underline text-sm block">
                    +91 98480 12345
                  </a>
                  <p className="text-slate-400 text-[11px] mt-0.5">Spoken Languages: Telugu, Hindi, English</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">Official Email:</strong>
                  <a href="mailto:contact@devihostels.com" className="text-slate-300 hover:text-white">
                    contact@devihostels.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block mb-0.5">Office & Visiting Hours:</strong>
                  <p>Admission Desk: 7:00 AM – 10:00 PM (All 7 Days)</p>
                  <p className="text-emerald-400 font-semibold">Airport Shift Residents: 24/7 Check-in Assistance</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919848012345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
              <a
                href="tel:+919848012345"
                className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Phone className="w-4 h-4" /> Call Direct
              </a>
            </div>
          </div>
        </div>

        {/* 5 Branches Direct Address List */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
          <h3 className="text-xl font-bold text-white">
            Find the Nearest Branch to Your College or Airport Gate
          </h3>

          <div className="space-y-4">
            {DEVI_BRANCHES.map((b) => (
              <div
                key={b.id}
                className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      DV{b.branch_code}
                    </span>
                    <h4 className="text-sm font-bold text-white">{b.name}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{b.address_line1}, {b.city}</p>
                  <p className="text-[11px] text-amber-400 font-medium mt-0.5">{b.distance_from_rgia}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/branches/${b.branch_code}`}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    View
                  </Link>
                  <Link
                    href={`/enquiry?branch=${b.branch_code}`}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
