import React from 'react';
import Link from 'next/link';
import {
  Wifi,
  Utensils,
  ShieldCheck,
  Zap,
  Droplets,
  Sparkles,
  Shirt,
  Tv,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function FacilitiesPage() {
  const masterFacilities = [
    {
      icon: Utensils,
      title: '3-Times Hygienic Homely Dining',
      desc: 'Freshly prepared South & North Indian breakfast, lunch, and dinner. Unlimited rice, chapatis, curries, sambar, curd, and special Sunday feasts.',
    },
    {
      icon: Wifi,
      title: 'High-Speed Unlimited Fiber Wi-Fi',
      desc: '100 Mbps+ enterprise dual-band mesh Wi-Fi network covering every room, corridor, and dining space for uninterrupted work and study.',
    },
    {
      icon: ShieldCheck,
      title: '24/7 Biometric Security & CCTV',
      desc: 'High-definition cameras recording all corridors and entrance gates, biometric access, and police-verified wardens for complete safety.',
    },
    {
      icon: Zap,
      title: 'Inverter & Generator Power Backup',
      desc: 'Heavy-duty power backup ensuring fans, lights, Wi-Fi routers, and charging sockets stay active during municipal power cuts.',
    },
    {
      icon: Droplets,
      title: '24/7 Water & Hot Water Geysers',
      desc: 'Uninterrupted municipal water supply paired with instant bathroom geysers and solar water heating systems for all seasons.',
    },
    {
      icon: Shirt,
      title: 'Automatic Washing Machines',
      desc: 'Dedicated laundry zones with high-capacity automatic washing machines and spacious, sunlit covered drying balconies.',
    },
    {
      icon: Sparkles,
      title: 'Daily Housekeeping & Sanitization',
      desc: 'Professional daily cleaning of resident rooms, daily bathroom disinfection, garbage clearance, and corridor sweeping.',
    },
    {
      icon: Droplets,
      title: 'Multi-Stage RO Drinking Water',
      desc: 'Commercial Reverse Osmosis (RO) water purification plants with mineral enhancement dispensers installed on every floor.',
    },
    {
      icon: BookOpen,
      title: 'Individual Wardrobes & Study Desks',
      desc: 'Lockable steel wardrobes, personal study desks, ergonomic chairs, and bedside mobile charging points for every resident.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          All-Inclusive Amenities
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          World-Class Hostel Facilities at DEVI HOSTELS
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Everything you need for a comfortable, stress-free stay in Shamshabad. No hidden electricity bills, no separate food surcharges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {masterFacilities.map((fac, idx) => {
          const Icon = fac.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-amber-500/40 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {fac.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {fac.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center space-y-6">
        <h3 className="text-2xl font-bold text-white">
          Experience the DEVI Hostels Hospitality in Person
        </h3>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Visit any of our 5 branches in Shamshabad today to tour the rooms, taste our food, and inspect the amenities.
        </p>
        <Link
          href="/enquiry"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl transition-all"
        >
          Book a Free Room Tour <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
