import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DEVI_BRANCHES, VERIFIED_CONTACTS } from '@/lib/data/branches';
import BranchCard from '@/components/ui/BranchCard';
import {
  Building2,
  GraduationCap,
  Plane,
  ShieldCheck,
  Utensils,
  Wifi,
  ArrowRight,
  MapPin,
  CheckCircle,
  Phone,
  Bed,
  Dumbbell,
  Car,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 bg-[#F5F1E9]">
      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E5E0D7] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 badge-mono border-[#D6A85F] text-[#142B45]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#477B70] animate-pulse" />
              <span>SHAMSHABAD • 5 CENTRALIZED BRANCHES NEAR RGIA</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#142B45] tracking-tight leading-[1.1]">
              A Better Place to Stay. <br />
              <span className="italic text-[#142B45] font-medium">A Better Way to Live.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#263447] max-w-2xl mx-auto font-normal leading-relaxed">
              Comfortable accommodation for students and RGIA airport professionals in Shamshabad.
            </p>

            {/* Two Main Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/branches" className="btn-primary-navy py-3.5 px-8 text-xs w-full sm:w-auto">
                <span>Explore Branches</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${VERIFIED_CONTACTS.whatsapp_number}?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald-cta py-3.5 px-8 text-xs w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-[#477B70]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP: 5 Branches & 2 Customer Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card-editorial p-5 bg-[#FFFFFF]">
            <span className="badge-mono text-[9px] mb-1.5 border-[#D6A85F]">NETWORK</span>
            <p className="font-serif text-2xl font-bold text-[#142B45]">5 Branches</p>
            <p className="text-xs text-[#718096] mt-0.5">4 Boys Hostels + 1 Girls Enclave</p>
          </div>
          <div className="card-editorial p-5 bg-[#FFFFFF]">
            <span className="badge-mono text-[9px] mb-1.5 border-[#D6A85F]">AUDIENCE</span>
            <p className="font-serif text-2xl font-bold text-[#142B45]">2 Communities</p>
            <p className="text-xs text-[#718096] mt-0.5">College Students & RGIA Shift Staff</p>
          </div>
          <div className="card-editorial p-5 bg-[#FFFFFF]">
            <span className="badge-mono text-[9px] mb-1.5 border-[#D6A85F]">CUISINE</span>
            <p className="font-serif text-2xl font-bold text-[#142B45]">3 Fresh Meals</p>
            <p className="text-xs text-[#718096] mt-0.5">Daily South & North Indian Buffet</p>
          </div>
          <div className="card-editorial p-5 bg-[#FFFFFF]">
            <span className="badge-mono text-[9px] mb-1.5 border-[#D6A85F]">VERIFIED</span>
            <p className="font-serif text-2xl font-bold text-[#477B70]">4.8 ★ Google</p>
            <p className="text-xs text-[#718096] mt-0.5">Devi Luxury Boys Hostel / Mansion</p>
          </div>
        </div>
      </section>

      {/* 4. FEATURED: DEVI MANSION (THE BOYS TOWN) SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-editorial p-8 sm:p-12 bg-[#FFFFFF] rounded-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-mono bg-[#142B45] text-[#FFFFFF] border-0">
                  FLAGSHIP PROPERTY
                </span>
                <span className="badge-mono border-[#D6A85F] text-[#142B45]">
                  BRANCH CODE 1
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B45]">
                DEVI MANSION <span className="italic font-normal">(The Boys Town)</span>
              </h2>

              <p className="text-sm text-[#263447] leading-relaxed">
                Newly constructed flagship property located on <strong>Street Number 8, Rallaguda Road, Madhura Nagar, Shamshabad</strong>. Built with modern infrastructure featuring attached private washrooms, free in-house gym, vehicle parking, and round-the-clock security.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#263447]">
                  <Dumbbell className="w-4 h-4 text-[#D6A85F]" />
                  <span>Free On-Site Fitness Gym</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#263447]">
                  <Car className="w-4 h-4 text-[#D6A85F]" />
                  <span>Dedicated Bike & Car Parking</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#263447]">
                  <Bed className="w-4 h-4 text-[#D6A85F]" />
                  <span>Attached Bathrooms with Geysers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#263447]">
                  <Utensils className="w-4 h-4 text-[#D6A85F]" />
                  <span>3-Times Daily Hygienic Buffet Meals</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link href="/branches/1" className="btn-primary-navy text-xs py-3 px-6">
                  Explore Devi Mansion
                </Link>
                <a
                  href={VERIFIED_CONTACTS.google_knowledge_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-luxury text-xs py-3 px-5 flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#D6A85F]" />
                  Google Listing (4.8★)
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-xl overflow-hidden border border-[#E5E0D7] shadow-sm relative h-64 sm:h-72">
                <Image
                  src="/images/branches/branch1-main.svg"
                  alt="Devi Mansion Flagship Building Front View"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <p className="text-[11px] font-mono text-[#718096] text-center">
                Street Number 8, Rallaguda Road, Madhura Nagar, Shamshabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FIVE BRANCH CARDS */}
      <section id="branches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge-mono border-[#D6A85F] text-[#142B45]">
            ALL FIVE LOCATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B45]">
            Centralized Branch Network
          </h2>
          <p className="text-xs sm:text-sm text-[#718096]">
            All 5 branches operate under one central management system in Shamshabad, Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVI_BRANCHES.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>

      {/* 6. ESSENTIAL FACILITIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge-mono border-[#D6A85F] text-[#142B45]">
            CORE AMENITIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B45]">
            Essential Facilities
          </h2>
          <p className="text-xs sm:text-sm text-[#718096]">
            Designed for healthy living, daily comfort, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <Bed className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">Attached Bathrooms</h3>
            <p className="text-[11px] text-[#718096]">24/7 Hot water geysers in private washrooms.</p>
          </div>

          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <Utensils className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">3-Times Homely Food</h3>
            <p className="text-[11px] text-[#718096]">Hygienic South & North Indian buffet meals.</p>
          </div>

          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <Wifi className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">Unlimited Wi-Fi</h3>
            <p className="text-[11px] text-[#718096]">High-speed fiber connectivity on every floor.</p>
          </div>

          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <Dumbbell className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">In-House Gym</h3>
            <p className="text-[11px] text-[#718096]">Free fitness equipment at Devi Mansion.</p>
          </div>

          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <Car className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">Vehicle Parking</h3>
            <p className="text-[11px] text-[#718096]">Safe parking for two-wheelers and cars.</p>
          </div>

          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">24/7 Security</h3>
            <p className="text-[11px] text-[#718096]">CCTV surveillance and biometric entry.</p>
          </div>

          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <CheckCircle className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">RO Drinking Water</h3>
            <p className="text-[11px] text-[#718096]">Purified mineral water dispensers.</p>
          </div>

          <div className="card-editorial p-5 bg-[#FFFFFF] text-center space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#F5F1E9] text-[#142B45] flex items-center justify-center mx-auto">
              <Building2 className="w-5 h-5 text-[#D6A85F]" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#142B45]">Power Backup</h3>
            <p className="text-[11px] text-[#718096]">Continuous backup for lights, fans, & Wi-Fi.</p>
          </div>
        </div>
      </section>

      {/* 7. TWO AUDIENCE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge-mono border-[#D6A85F] text-[#142B45]">
            TAILORED LIVING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B45]">
            Built for Two Communities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Audience Card 1: Students */}
          <div className="card-editorial p-8 bg-[#FFFFFF] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F1E9] text-[#142B45] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#D6A85F]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#142B45]">
                College & Aviation Academy Students
              </h3>
              <p className="text-xs sm:text-sm text-[#263447] leading-relaxed">
                Quiet study atmosphere with comfortable study desks, book shelves, high-speed fiber internet for online lectures, and nutritious 3-times daily meals.
              </p>
              <ul className="space-y-2 text-xs text-[#263447]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#477B70]" />
                  <span>Close to Shamshabad colleges & degree institutes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#477B70]" />
                  <span>Strict anti-ragging policy and peaceful study environment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#477B70]" />
                  <span>Parent-verified admission with emergency contact logs</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/student-accommodation" className="btn-ghost-luxury text-xs py-2.5 px-4 w-full text-center">
                Learn About Student Accommodation →
              </Link>
            </div>
          </div>

          {/* Audience Card 2: Airport Employees */}
          <div className="card-editorial p-8 bg-[#FFFFFF] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F1E9] text-[#142B45] flex items-center justify-center">
                <Plane className="w-6 h-6 text-[#D6A85F]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#142B45]">
                RGIA Airport Professionals & Shift Staff
              </h3>
              <p className="text-xs sm:text-sm text-[#263447] leading-relaxed">
                Designed for ground handlers, cabin crew, security personnel, and airport professionals working rotational day and night shifts at RGIA Shamshabad.
              </p>
              <ul className="space-y-2 text-xs text-[#263447]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#477B70]" />
                  <span>Minutes from RGIA Passenger Terminals & Cargo Circle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#477B70]" />
                  <span>Shift-friendly quiet hours for uninterrupted daytime sleep</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#477B70]" />
                  <span>Early breakfast and packed meals for morning/night shifts</span>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/airport-employee-accommodation" className="btn-ghost-luxury text-xs py-2.5 px-4 w-full text-center">
                Learn About Airport Quarters →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GENUINE PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="badge-mono border-[#D6A85F] text-[#142B45]">
              PROPERTY PHOTOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B45]">
              Genuine Campus Gallery
            </h2>
          </div>
          <Link href="/gallery" className="btn-ghost-luxury text-xs py-2 px-4">
            View Complete Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden border border-[#E5E0D7] bg-[#FFFFFF] shadow-xs relative h-48 sm:h-56">
            <Image
              src="/images/branches/branch1-main.svg"
              alt="Devi Mansion Flagship Exterior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              unoptimized
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E5E0D7] bg-[#FFFFFF] shadow-xs relative h-48 sm:h-56">
            <Image
              src="/images/branches/room-boys-1.svg"
              alt="Devi Mansion Attached Washroom Room"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              unoptimized
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E5E0D7] bg-[#FFFFFF] shadow-xs relative h-48 sm:h-56">
            <Image
              src="/images/branches/branch2-main.svg"
              alt="Branch 2 Campus Exterior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              unoptimized
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E5E0D7] bg-[#FFFFFF] shadow-xs relative h-48 sm:h-56">
            <Image
              src="/images/branches/branch5-main.svg"
              alt="Girls Hostel Branch 1 Secure Campus"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 9. SHORT ENQUIRY / CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-editorial p-8 sm:p-12 bg-[#FFFFFF] text-center max-w-3xl mx-auto space-y-6">
          <span className="badge-mono border-[#D6A85F] text-[#142B45]">
            CHECK AVAILABILITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142B45]">
            Plan Your Stay with DEVI Hostels
          </h2>
          <p className="text-xs sm:text-sm text-[#263447] max-w-lg mx-auto leading-relaxed">
            Submit a fast admission enquiry or contact management directly for live bed vacancy, sharing tariffs, and room allocation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/enquiry" className="btn-primary-navy py-3 px-8 text-xs w-full sm:w-auto">
              Start Online Enquiry
            </Link>
            <a
              href={`tel:${VERIFIED_CONTACTS.primary_phone}`}
              className="btn-ghost-luxury py-3 px-6 text-xs w-full sm:w-auto flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#477B70]" />
              Call {VERIFIED_CONTACTS.primary_phone}
            </a>
          </div>

          <p className="text-[11px] font-mono text-[#718096]">
            Office: {VERIFIED_CONTACTS.flagship_address}
          </p>
        </div>
      </section>
    </div>
  );
}
