import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, UserCheck, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#FAFAF9]">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge-mono mb-2">CONTACT DESK</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A]">
          Connect with <span className="italic text-[#365679] font-medium">DEVI HOSTELS & DEVI MANSION</span>
        </h1>
        <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
          Reach out directly to Proprietor <strong>MARPINA PRADEEP</strong> and our Shamshabad centralized admission desk for room visits, bed allotments, or corporate airport staff tie-ups.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-glass p-8 space-y-6 bg-white border border-slate-200">
            <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
              Central Administration Office
            </h3>

            <div className="space-y-4 text-xs text-[#334155]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] text-sm block mb-0.5">Physical Address:</strong>
                  Street Number 8, Rallaguda Road, Madhura Nagar, Shamshabad, Hyderabad, Telangana — 501218, India.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] text-sm block mb-0.5">Phone (Call & WhatsApp):</strong>
                  <a href="tel:+919989897705" className="font-mono text-emerald-700 font-bold hover:underline text-sm block">
                    +91 99898 97705
                  </a>
                  <a href="tel:+919494012345" className="font-mono text-slate-700 font-bold hover:underline text-xs block mt-0.5">
                    +91 94940 12345 (Proprietor: Marpina Pradeep)
                  </a>
                  <p className="text-[#64748B] text-[11px] mt-0.5 font-mono">Languages: Telugu, Hindi, English</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramIcon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] text-sm block mb-0.5">Official Instagram:</strong>
                  <a
                    href="https://www.instagram.com/devi_mansion_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-rose-700 font-bold hover:underline flex items-center gap-1"
                  >
                    @devi_mansion_ <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] text-sm block mb-0.5">Official Email:</strong>
                  <a href="mailto:contact@devihostels.com" className="text-[#334155] hover:text-[#0F172A] font-mono">
                    contact@devihostels.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] text-sm block mb-0.5">Office Hours & Check-ins:</strong>
                  Open 24 Hours • 7 Days a Week (Accommodating all RGIA flight shifts)
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="https://wa.me/919989897705?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald-cta w-full py-3 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 99898 97705)</span>
              </a>
              <a
                href="https://share.google/iCW7Zy3mRxZL94HtS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-luxury w-full py-2.5 text-center text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Google Knowledge Graph & Directions
              </a>
            </div>
          </div>
        </div>

        {/* 5 Branch Direct Helplines */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">
            Five Branch Network Direct Contacts
          </h3>

          <div className="space-y-3">
            {DEVI_BRANCHES.map((b) => (
              <div
                key={b.id}
                className="card-glass p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="badge-mono text-[9px]">
                      BRANCH {b.branch_code}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      b.gender_category === 'girls' ? 'bg-rose-100 text-rose-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {b.gender_category === 'girls' ? 'Girls Only' : 'Boys Hostel'}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0F172A]">{b.name}</h4>
                  <p className="text-xs text-[#64748B] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    {b.address_line1} ({b.distance_from_rgia})
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <a
                    href="tel:+919989897705"
                    className="btn-ghost-luxury py-1.5 px-3 text-[10px]"
                  >
                    <Phone className="w-3 h-3 text-emerald-600" /> Call Branch
                  </a>
                  <Link
                    href={`/enquiry?branch=${b.branch_code}`}
                    className="btn-primary-ink py-1.5 px-3 text-[10px]"
                  >
                    Enquire Bed
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
