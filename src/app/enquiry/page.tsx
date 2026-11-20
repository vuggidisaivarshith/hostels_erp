import React, { Suspense } from 'react';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import { Sparkles, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Admission Enquiry — DEVI HOSTELS Shamshabad',
  description: 'Submit an online admission enquiry for student or airport employee accommodation across our 5 branches in Shamshabad, Hyderabad.',
};

export default function EnquiryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          Admissions Open
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Admission & Room Booking Enquiry
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Fill out the multi-step form below to check real-time bed vacancy across our 5 branches in Shamshabad, Hyderabad.
        </p>
      </div>

      {/* Multi-step Form in Suspense */}
      <Suspense fallback={
        <div className="p-12 text-center text-slate-400 text-sm">
          Loading admission enquiry form...
        </div>
      }>
        <EnquiryForm />
      </Suspense>

      {/* Trust banner */}
      <div className="max-w-2xl mx-auto text-center text-xs text-slate-400 flex items-center justify-center gap-6">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Police-Verified Hostels</span>
        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Registration Fees</span>
        <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-emerald-400" /> Instant Callback</span>
      </div>
    </div>
  );
}
