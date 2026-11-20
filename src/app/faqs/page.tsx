import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, Phone } from 'lucide-react';

export default function FaqsPage() {
  const faqs = [
    {
      q: 'What is the exact address of DEVI HOSTELS in Shamshabad?',
      a: 'DEVI HOSTELS operates five centralized branches in Shamshabad, Hyderabad (Pin 501218). Our administrative hub is situated opposite HP Petrol Bunk on the Main Airport Approach Road, just 4 to 8 minutes away from Rajiv Gandhi International Airport (RGIA).',
    },
    {
      q: 'What is the DEVI Resident ID and how is it formatted?',
      a: 'Every admitted resident receives a permanent unique Resident ID in the mandatory format: DV[BRANCH_CODE]-[FLOOR_NUMBER]-[UNIQUE_NUMBER] (e.g. DV1-1-00001, DV5-2-00045). This ID remains permanently tied to your profile even if you later change rooms or branches.',
    },
    {
      q: 'Is DEVI Hostels suitable for RGIA airport employees on rotational shifts?',
      a: 'Yes, absolutely. Our Branch 2 and Branch 5 are specially optimized for airport shift staff (IndiGo, Air India, AISATS, Çelebi, GMR). They feature 24/7 biometric check-in/entry, flexible warm food timings, and daytime quiet hours for rotational sleep.',
    },
    {
      q: 'Is there a dedicated Girls Hostel branch?',
      a: 'Yes! Branch 5 (Girls Hostel Branch 1) is a 5-floor high-security dedicated girls property with female wardens, biometric access, 24/7 CCTV surveillance, and female security guards.',
    },
    {
      q: 'What facilities are included in the monthly rent?',
      a: 'Monthly rent includes 3-times daily freshly prepared South & North Indian meals, unlimited high-speed Wi-Fi, daily room housekeeping, hot water geysers, 24/7 power backup, automatic washing machines, and purified RO drinking water.',
    },
    {
      q: 'How does the monthly billing cycle work?',
      a: 'DEVI HOSTELS follows a fair individual joining-date billing engine. If you join on November 15, your monthly invoice runs from November 15 to December 14, and subsequent cycles follow your joining date without pro-ration penalties.',
    },
    {
      q: 'How can I pay my rent?',
      a: 'You can pay online via UPI (Google Pay, PhonePe, Paytm), debit/credit cards, or net banking directly through the DEVI Resident Portal. You may also pay cash or direct bank transfer to our management desk.',
    },
    {
      q: 'How do I book a room or schedule a visit?',
      a: 'You can fill out our online multi-step admission enquiry form on this website, or call Owner Marpina Pradeep directly at +91 98480 12345.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          Got Questions?
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Common queries regarding admission, branches, dining, safety, and resident policies at DEVI HOSTELS, Shamshabad.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2.5 shadow-lg"
          >
            <h3 className="text-base font-bold text-white flex items-start gap-2.5">
              <span className="font-mono text-xs font-bold text-amber-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shrink-0 mt-0.5">
                Q{idx + 1}
              </span>
              <span>{faq.q}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 pl-8 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Still have questions?</h3>
        <p className="text-xs text-slate-400">
          Speak with our proprietor <strong>Marpina Pradeep</strong> directly or start your online enquiry.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/enquiry"
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
          >
            Submit Enquiry
          </Link>
          <a
            href="tel:+919848012345"
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700"
          >
            Call: +91 98480 12345
          </a>
        </div>
      </div>
    </div>
  );
}
