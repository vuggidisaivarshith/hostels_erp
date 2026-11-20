import React, { Suspense } from 'react';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import { ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { VERIFIED_CONTACTS } from '@/lib/data/branches';

export const metadata = {
  title: 'Admission Enquiry — DEVI HOSTELS Shamshabad',
  description: 'Submit an online admission enquiry for student or airport professional accommodation across our 5 branches in Shamshabad, Hyderabad.',
};

export default function EnquiryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10 bg-[#F5F1E9]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          ADMISSIONS OPEN
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          Admission & Vacancy Enquiry
        </h1>
        <p className="text-[#263447] text-sm leading-relaxed">
          Complete the enquiry form below to check real-time bed vacancy across our 5 branches in Shamshabad near RGIA.
        </p>
      </div>

      {/* Multi-step Form in Suspense */}
      <Suspense
        fallback={
          <div className="p-12 text-center text-[#718096] text-xs font-mono">
            Loading admission enquiry form...
          </div>
        }
      >
        <EnquiryForm />
      </Suspense>

      {/* Trust banner */}
      <div className="max-w-2xl mx-auto text-center text-xs text-[#718096] flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-[#E5E0D7]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#477B70]" /> Verified Security Protocols
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[#477B70]" /> Transparent Monthly Tariffs
        </span>
        <span className="flex items-center gap-1.5">
          <Phone className="w-4 h-4 text-[#477B70]" /> Direct Helpline: {VERIFIED_CONTACTS.primary_phone}
        </span>
      </div>
    </div>
  );
}
