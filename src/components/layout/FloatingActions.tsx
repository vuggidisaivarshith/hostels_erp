'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export default function FloatingActions() {
  const whatsappUrl =
    'https://wa.me/919989897705?text=' +
    encodeURIComponent('Hello DEVI Hostels & Devi Mansion Management (Marpina Pradeep). I would like to enquire about room availability in Shamshabad.');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Instagram Official Page */}
      <a
        href="https://www.instagram.com/devi_mansion_/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative border border-white/40"
        aria-label="Instagram Devi Mansion"
      >
        <InstagramIcon className="w-5 h-5" />
        <span className="absolute right-14 bg-[#0F172A] text-white font-mono text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          @devi_mansion_
        </span>
      </a>

      {/* WhatsApp Quick Chat */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#059669] hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all group relative border border-emerald-400"
        aria-label="Chat on WhatsApp with DEVI Hostels"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 bg-[#0F172A] text-white font-mono text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          WhatsApp: +91 99898 97705
        </span>
      </a>

      {/* Direct Phone Call */}
      <a
        href="tel:+919989897705"
        className="w-12 h-12 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white flex items-center justify-center shadow-lg shadow-slate-900/30 hover:scale-110 active:scale-95 transition-all group relative border border-slate-700"
        aria-label="Call DEVI Hostels Management"
      >
        <Phone className="w-5 h-5 text-amber-400" />
        <span className="absolute right-14 bg-[#0F172A] text-white font-mono text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Call: +91 99898 97705
        </span>
      </a>
    </div>
  );
}
