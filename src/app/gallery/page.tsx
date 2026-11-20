import React from 'react';
import Link from 'next/link';
import { Camera, Sparkles, Building2, Utensils, Bed, ShieldCheck, ArrowRight } from 'lucide-react';
import { DEVI_BRANCHES } from '@/lib/data/branches';

export default function GalleryPage() {
  const galleryItems = [
    {
      title: 'Spacious 2-Sharing Executive Bedroom',
      category: 'Bedrooms',
      branch: 'Boys Hostel Branch 1',
      desc: 'Ergonomic wooden cot beds, individual study tables, and attached private washroom.',
      tag: 'Executive',
    },
    {
      title: 'Hygienic Commercial Kitchen & Dining Hall',
      category: 'Dining & Food',
      branch: 'All Branches',
      desc: 'Stainless steel dining tables, spotlessly sanitized cookware, and daily fresh meal prep.',
      tag: 'Homely Mess',
    },
    {
      title: 'High-Security Biometric Entrance & Reception',
      category: 'Security',
      branch: 'Girls Hostel Branch 1',
      desc: 'Facial and thumb biometric access gate, lady guard desk, and 24/7 CCTV surveillance screen.',
      tag: 'Security',
    },
    {
      title: 'Quiet Study & Academic Reading Lounge',
      category: 'Study Zones',
      branch: 'Boys Hostel Branch 3',
      desc: 'Equipped with 100 Mbps fiber internet, reading lamps, and silent academic atmosphere.',
      tag: 'Academics',
    },
    {
      title: 'Modern Attached Bathroom with Instant Geyser',
      category: 'Bathrooms',
      branch: 'All Branches',
      desc: 'Glazed anti-skid ceramic tiles, instant 25L geysers, western commode, and daily disinfection.',
      tag: 'Hygiene',
    },
    {
      title: 'Commercial Laundry Zone with Automatic Washers',
      category: 'Amenities',
      branch: 'Boys Hostel Branch 2',
      desc: 'High-capacity washing machines, steam press stations, and sunlit covered clothes drying.',
      tag: 'Convenience',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          Visual Tour & Living Spaces
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          DEVI Hostels Photo & Facilities Gallery
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Inspect our rooms, dining halls, study areas, and security infrastructure across all five branches in Shamshabad.
        </p>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all flex flex-col group"
          >
            {/* Visual Simulated Mock Showcase Frame */}
            <div className="h-48 bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950/40 p-6 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {item.category}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded">
                  {item.branch}
                </span>
              </div>
              <div className="z-10">
                <span className="text-xs font-bold text-amber-400">{item.tag}</span>
                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
              <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-semibold">Verified Property</span>
                <Link
                  href="/enquiry"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  Book Visit <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
