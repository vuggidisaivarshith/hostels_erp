'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsappUrl = 'https://wa.me/919848012345?text=' + encodeURIComponent('Hello DEVI Hostels Management (Marpina Pradeep). I would like to enquire about room availability in Shamshabad.');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Quick Chat */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all group relative"
        aria-label="Chat on WhatsApp with DEVI Hostels"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          WhatsApp Admission Desk
        </span>
      </a>

      {/* Direct Phone Call */}
      <a
        href="tel:+919848012345"
        className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/30 hover:scale-110 active:scale-95 transition-all group relative"
        aria-label="Call DEVI Hostels Management"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Call: +91 98480 12345
        </span>
      </a>
    </div>
  );
}
