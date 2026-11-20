import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, UserCheck, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { DEVI_BRANCHES, VERIFIED_CONTACTS } from '@/lib/data/branches';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#F5F1E9]">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          CONTACT & LOCATION DESK
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#142B45]">
          Connect with <span className="italic font-normal">DEVI HOSTELS & DEVI MANSION</span>
        </h1>
        <p className="text-[#263447] text-sm sm:text-base leading-relaxed">
          Reach out directly to Proprietor <strong>{VERIFIED_CONTACTS.owner_proprietor}</strong> and our Shamshabad centralized admission desk for room visits, bed allotments, or corporate airport staff tie-ups.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-editorial p-8 space-y-6 bg-[#FFFFFF] border border-[#E5E0D7]">
            <h2 className="font-serif text-2xl font-bold text-[#142B45]">
              Central Office & Flagship
            </h2>

            <div className="space-y-4 text-xs text-[#263447]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D6A85F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#142B45] text-sm block mb-0.5">Physical Address:</strong>
                  {VERIFIED_CONTACTS.flagship_address}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#477B70] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#142B45] text-sm block mb-0.5">Verified Helplines:</strong>
                  <a href={`tel:${VERIFIED_CONTACTS.primary_phone}`} className="font-mono text-[#142B45] font-bold hover:underline text-sm block">
                    {VERIFIED_CONTACTS.primary_phone}
                  </a>
                  <a href={`tel:${VERIFIED_CONTACTS.secondary_phone}`} className="font-mono text-[#718096] font-bold hover:underline text-xs block mt-0.5">
                    {VERIFIED_CONTACTS.secondary_phone} (Proprietor: {VERIFIED_CONTACTS.owner_proprietor})
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramIcon className="w-5 h-5 text-[#D6A85F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#142B45] text-sm block mb-0.5">Official Instagram:</strong>
                  <a
                    href={VERIFIED_CONTACTS.instagram_profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[#142B45] font-bold hover:underline flex items-center gap-1"
                  >
                    {VERIFIED_CONTACTS.instagram_handle} <ExternalLink className="w-3 h-3 text-[#D6A85F]" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D6A85F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#142B45] text-sm block mb-0.5">Official Email:</strong>
                  <a href="mailto:contact@devihostels.com" className="text-[#263447] hover:text-[#142B45] font-mono">
                    contact@devihostels.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#142B45] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#142B45] text-sm block mb-0.5">Check-ins & Visiting Hours:</strong>
                  Open 24 Hours • 7 Days a Week (Accommodating all RGIA flight shifts)
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E0D7] flex flex-col gap-2">
              <a
                href={`https://wa.me/${VERIFIED_CONTACTS.whatsapp_number}?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald-cta w-full py-3 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 99898 97705)</span>
              </a>
              <a
                href={VERIFIED_CONTACTS.google_knowledge_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-luxury w-full py-2.5 text-center text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#D6A85F]" />
                Google Knowledge Graph & Directions
              </a>
            </div>
          </div>
        </div>

        {/* 5 Branch Direct Details */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#142B45] mb-4">
            Five Branch Network Direct Contacts
          </h2>

          <div className="space-y-3">
            {DEVI_BRANCHES.map((b) => (
              <div
                key={b.id}
                className="card-editorial p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D7] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="badge-mono text-[9px] border-[#D6A85F]">
                      BRANCH {b.branch_code}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      b.gender_category === 'girls' ? 'bg-[#FDF6F0] text-[#9C4221]' : 'bg-[#F5F1E9] text-[#142B45]'
                    }`}>
                      {b.gender_category === 'girls' ? 'Girls Only' : 'Boys Hostel'}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#142B45]">{b.name}</h3>
                  <p className="text-xs text-[#718096] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D6A85F]" />
                    {b.address_line1} ({b.distance_from_rgia})
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <a
                    href={`tel:${VERIFIED_CONTACTS.primary_phone}`}
                    className="btn-ghost-luxury py-1.5 px-3 text-[10px]"
                  >
                    <Phone className="w-3 h-3 text-[#477B70]" /> Call Branch
                  </a>
                  <Link
                    href={`/enquiry?branch=${b.branch_code}`}
                    className="btn-primary-navy py-1.5 px-3 text-[10px]"
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
