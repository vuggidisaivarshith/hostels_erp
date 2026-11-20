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
  BookOpen,
  ArrowRight,
  Dumbbell,
  Car
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
      desc: 'High-speed dual-band Wi-Fi network covering rooms, corridors, and dining spaces for uninterrupted work, video calls, and study.',
    },
    {
      icon: Dumbbell,
      title: 'Free On-Site Fitness Gym (Devi Mansion)',
      desc: 'Dedicated fitness gym at our flagship building Devi Mansion equipped with weights and cardio gear for healthy active resident living.',
    },
    {
      icon: Car,
      title: 'Dedicated Vehicle Parking',
      desc: 'Safe, covered on-site parking for bikes and two-wheelers, plus designated car parking spaces at flagship branch.',
    },
    {
      icon: ShieldCheck,
      title: '24/7 Biometric Security & CCTV',
      desc: 'CCTV surveillance recording corridors and entrance gates, biometric access controls, and resident wardens.',
    },
    {
      icon: Zap,
      title: 'Inverter & Generator Power Backup',
      desc: 'Power backup ensuring fans, lighting, Wi-Fi routers, and charging sockets remain active during power interruptions.',
    },
    {
      icon: Droplets,
      title: '24/7 Water & Hot Water Geysers',
      desc: 'Continuous water supply paired with individual bathroom geysers for hot water across all seasons.',
    },
    {
      icon: Shirt,
      title: 'Automatic Washing Machines',
      desc: 'Dedicated laundry areas with high-capacity automatic washing machines and spacious covered drying balconies.',
    },
    {
      icon: Droplets,
      title: 'Multi-Stage RO Drinking Water',
      desc: 'Reverse Osmosis (RO) water purification units with mineral enrichment dispensers installed on every floor.',
    },
    {
      icon: BookOpen,
      title: 'Individual Wardrobes & Study Desks',
      desc: 'Lockable steel wardrobes, personal study desks, ergonomic chairs, and bedside charging points for every resident.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 bg-[#F5F1E9]">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          ALL-INCLUSIVE AMENITIES
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          Hostel Amenities at DEVI HOSTELS
        </h1>
        <p className="text-[#263447] text-sm sm:text-base leading-relaxed">
          Everything you need for a comfortable, stress-free stay in Shamshabad near RGIA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {masterFacilities.map((fac, idx) => {
          const Icon = fac.icon;
          return (
            <div
              key={idx}
              className="card-editorial p-6 sm:p-8 space-y-3 bg-[#FFFFFF] border border-[#E5E0D7] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5F1E9] text-[#142B45] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Icon className="w-6 h-6 text-[#D6A85F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#142B45]">
                {fac.title}
              </h3>
              <p className="text-xs text-[#718096] leading-relaxed">
                {fac.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="card-editorial p-8 sm:p-10 text-center space-y-4 bg-[#FFFFFF] border border-[#E5E0D7]">
        <h2 className="font-serif text-2xl font-bold text-[#142B45]">
          Experience DEVI Hostels in Person
        </h2>
        <p className="text-xs text-[#718096] max-w-xl mx-auto">
          Visit our flagship campus Devi Mansion in Shamshabad to inspect the rooms, gym, and dining hall.
        </p>
        <Link
          href="/enquiry"
          className="btn-primary-navy py-3 px-8 text-xs inline-flex items-center gap-2"
        >
          <span>Submit Admission Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
