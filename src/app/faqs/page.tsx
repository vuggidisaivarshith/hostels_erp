import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { VERIFIED_CONTACTS } from '@/lib/data/branches';

export default function FaqsPage() {
  const faqs = [
    {
      q: 'What is the location of DEVI HOSTELS in Shamshabad?',
      a: `DEVI HOSTELS operates five centralized branches in Shamshabad, Hyderabad. Our flagship building, DEVI MANSION (The Boys Town), is located at ${VERIFIED_CONTACTS.flagship_address}, minutes away from Rajiv Gandhi International Airport (RGIA). For exact GPS pins and visits to our other branches, please contact management.`,
    },
    {
      q: 'What is the DEVI Resident ID format?',
      a: 'Every admitted resident receives a permanent unique Resident ID in the standardized format: DV[BRANCH_CODE]-[FLOOR_NUMBER]-[UNIQUE_NUMBER]. This ID remains permanently tied to your profile across stays, even if you change rooms or branches.',
    },
    {
      q: 'Is DEVI Hostels suitable for RGIA airport professionals on rotational shifts?',
      a: 'Yes, absolutely. Our branches are configured to accommodate airport shift professionals (IndiGo, Air India, AISATS, Çelebi, GMR) with 24/7 check-in assistance, flexible warm food, and quiet daytime hours for restful sleep between rotational shifts.',
    },
    {
      q: 'Is there a dedicated Girls Hostel branch?',
      a: 'Yes. Branch 5 (Girls Hostel Branch 1) is a dedicated accommodation facility featuring resident lady wardens, 24/7 CCTV surveillance, and strict visitor verification protocols.',
    },
    {
      q: 'What facilities are included in the monthly rent?',
      a: 'Monthly rent includes 3-times daily freshly prepared South & North Indian meals, unlimited high-speed fiber Wi-Fi, daily room housekeeping, hot water geysers, power backup, washing machines, and purified RO mineral drinking water.',
    },
    {
      q: 'How does the individual joining-date billing engine work?',
      a: 'DEVI HOSTELS follows an individual joining-date billing cycle. If your confirmed admission begins on the 15th, your billing cycle runs from the 15th of each month to the 14th of the next month, without pro-ration penalties.',
    },
    {
      q: 'How can I pay my rent?',
      a: 'Residents can pay online via UPI (Google Pay, PhonePe, Paytm), debit/credit cards, or net banking directly through the secure DEVI Resident Portal. You may also record counter cash or direct UPI at the management desk.',
    },
    {
      q: 'How do I submit an enquiry or visit the hostels?',
      a: `You can complete our online admission enquiry form on this website or call management directly at ${VERIFIED_CONTACTS.primary_phone} or ${VERIFIED_CONTACTS.secondary_phone}.`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10 bg-[#F5F1E9]">
      <div className="text-center space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          Got Questions?
        </h1>
        <p className="text-[#263447] text-sm leading-relaxed max-w-xl mx-auto">
          Common queries regarding admissions, branches, dining, security, and resident policies at DEVI HOSTELS, Shamshabad.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="card-editorial p-6 space-y-2 bg-[#FFFFFF] border border-[#E5E0D7]"
          >
            <h3 className="font-serif text-base font-bold text-[#142B45] flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-[#D6A85F] shrink-0 mt-0.5" />
              <span>{faq.q}</span>
            </h3>
            <p className="text-xs text-[#263447] pl-6 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="card-editorial p-8 text-center bg-[#FFFFFF] border border-[#E5E0D7] space-y-4">
        <h3 className="font-serif text-lg font-bold text-[#142B45]">
          Still have a question?
        </h3>
        <p className="text-xs text-[#718096]">
          Contact management directly for instant assistance regarding vacancies and tariffs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/enquiry" className="btn-primary-navy text-xs py-2.5 px-6">
            Admission Enquiry
          </Link>
          <a
            href={`tel:${VERIFIED_CONTACTS.primary_phone}`}
            className="btn-ghost-luxury text-xs py-2.5 px-6 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#477B70]" />
            <span>Call {VERIFIED_CONTACTS.primary_phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
