import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBranchByCode, getBranchById, DEVI_BRANCHES, VERIFIED_CONTACTS } from '@/lib/data/branches';
import {
  MapPin,
  Phone,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  User,
  Layers,
  Sparkles,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    ...DEVI_BRANCHES.map((b) => ({ id: b.id })),
  ];
}

export default async function BranchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const branchNum = parseInt(id, 10);
  const branch = !isNaN(branchNum) ? getBranchByCode(branchNum) : getBranchById(id);

  if (!branch) {
    notFound();
  }

  const isGirls = branch.gender_category === 'girls';

  return (
    <div className="bg-[#F5F1E9] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#718096]">
          <Link href="/" className="hover:text-[#142B45]">Home</Link>
          <span>/</span>
          <Link href="/branches" className="hover:text-[#142B45]">Branches</Link>
          <span>/</span>
          <span className="text-[#142B45] font-semibold">{branch.name}</span>
        </div>

        {/* Hero Header */}
        <div className="card-editorial p-8 sm:p-12 bg-[#FFFFFF] border border-[#E5E0D7] shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="badge-mono border-[#D6A85F] text-[#142B45]">
                BRANCH CODE {branch.branch_code}
              </span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                  isGirls
                    ? 'bg-rose-50 text-rose-800 border border-rose-200'
                    : 'bg-blue-50 text-[#142B45] border border-blue-200'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#D6A85F]" />
                {isGirls ? 'GIRLS ONLY • HIGH SECURITY ENCLAVE' : 'BOYS HOSTEL'}
              </span>
            </div>
            <span className="text-xs text-[#477B70] font-mono font-semibold flex items-center gap-1.5 bg-[#477B70]/10 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4" /> Operational & Accepting Enquiries
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45] leading-tight">
            {branch.name}
          </h1>

          <p className="text-[#477B70] text-sm font-mono font-medium mt-3 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            {branch.distance_from_rgia}
          </p>

          <p className="text-[#263447] text-base max-w-3xl mt-4 leading-relaxed">
            {branch.description}
          </p>

          <div className="pt-8 border-t border-[#E5E0D7] mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase text-[#718096] tracking-wider">
                Indicative Monthly Tariff
              </p>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#142B45]">
                ₹{branch.starting_price_per_month.toLocaleString()}
                <span className="font-sans text-sm font-normal text-[#718096]"> / bed / month</span>
              </p>
              <p className="text-xs text-[#477B70] mt-1 font-mono">
                Includes 3-Times Homely Buffet Meals, Wi-Fi & Maintenance
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/enquiry?branch=${branch.branch_code}`}
                className="btn-champagne-gold flex-1 sm:flex-none justify-center"
              >
                <span>Submit Admission Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${VERIFIED_CONTACTS.whatsapp_number}?text=${encodeURIComponent(
                  `Hello DEVI Hostels, I am enquiring about Branch ${branch.branch_code} (${branch.name}). Please share availability and current tariffs.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald-cta flex-1 sm:flex-none justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Grid: Details, Address & Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Address & Floor Structure */}
          <div className="space-y-6">
            <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#142B45] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D6A85F]" />
                Location & Verified Contact
              </h3>
              <div className="text-xs text-[#263447] space-y-2.5">
                <p>
                  <strong className="text-[#142B45]">Address:</strong> {branch.address_line1}
                </p>
                {branch.address_line2 && (
                  <p>
                    <strong className="text-[#142B45]">Area:</strong> {branch.address_line2}
                  </p>
                )}
                <p>
                  <strong className="text-[#142B45]">City / Hub:</strong> {branch.city}, {branch.state} - {branch.pincode}
                </p>
                <p>
                  <strong className="text-[#142B45]">Proprietor:</strong> {VERIFIED_CONTACTS.owner_proprietor}
                </p>
                <div className="pt-2 border-t border-[#E5E0D7] space-y-1.5">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D6A85F]" />
                    <a href={`tel:${branch.contact_phone}`} className="text-[#142B45] font-semibold hover:underline">
                      {branch.contact_phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D6A85F]" />
                    <a href={`tel:${VERIFIED_CONTACTS.secondary_phone}`} className="text-[#142B45] font-semibold hover:underline">
                      {VERIFIED_CONTACTS.secondary_phone}
                    </a>
                  </p>
                </div>

                {branch.google_map_link && (
                  <div className="pt-2">
                    <a
                      href={branch.google_map_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#142B45] hover:text-[#D6A85F]"
                    >
                      <span>Open Verified Google Listing</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#142B45] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#D6A85F]" />
                Building & Floor Structure
              </h3>
              <p className="text-xs text-[#718096]">
                Structure: <strong className="text-[#142B45]">{branch.total_floors} Floors</strong> (Ground Floor Dining + Residential Floors)
              </p>
              <div className="space-y-2 pt-2">
                {Array.from({ length: branch.total_floors }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F5F1E9] p-3 rounded-lg border border-[#E5E0D7] flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-[#142B45]">
                      {idx === 0 ? 'Ground Floor (Dining & Reception)' : `Floor ${idx}`}
                    </span>
                    <span className="text-[#D6A85F] font-mono text-[11px] font-bold">
                      DV{branch.branch_code}-{idx === 0 ? '1' : idx}-xxxxx
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Columns: Facilities & Sharing Types */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-editorial p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E0D7] space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#142B45] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D6A85F]" />
                Included Facilities & Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {branch.facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#F5F1E9] border border-[#E5E0D7] text-xs text-[#263447]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#477B70] shrink-0" />
                    <span className="font-medium">{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-editorial p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E0D7] space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#142B45]">
                Room Sharing Configurations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F5F1E9] p-5 rounded-xl border border-[#E5E0D7] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D6A85F]">1-SHARING</span>
                  <p className="font-serif text-sm font-bold text-[#142B45]">Private Executive Room</p>
                  <p className="text-xs text-[#718096] leading-relaxed">
                    Personal study desk, attached bathroom with geyser, private wardrobe, AC or Non-AC options.
                  </p>
                </div>
                <div className="bg-[#F5F1E9] p-5 rounded-xl border border-[#E5E0D7] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D6A85F]">2-SHARING</span>
                  <p className="font-serif text-sm font-bold text-[#142B45]">Standard Comfort</p>
                  <p className="text-xs text-[#718096] leading-relaxed">
                    Twin individual beds, personal lockable wardrobes, attached bathroom with 24/7 hot water.
                  </p>
                </div>
                <div className="bg-[#F5F1E9] p-5 rounded-xl border border-[#E5E0D7] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D6A85F]">3 & 4-SHARING</span>
                  <p className="font-serif text-sm font-bold text-[#142B45]">Economy & Budget</p>
                  <p className="text-xs text-[#718096] leading-relaxed">
                    Budget-friendly for students and airport crew, well-ventilated rooms with shared storage and attached bath.
                  </p>
                </div>
              </div>
            </div>

            {/* Admission Process Info */}
            <div className="card-editorial p-6 bg-[#FFFFFF] border border-[#E5E0D7] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-serif text-base font-bold text-[#142B45]">
                  Ready to visit Branch {branch.branch_code}?
                </p>
                <p className="text-xs text-[#718096]">
                  Submit an admission enquiry to generate your reference number and schedule a campus visit.
                </p>
              </div>
              <Link
                href={`/enquiry?branch=${branch.branch_code}`}
                className="btn-primary-navy shrink-0 text-xs"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
