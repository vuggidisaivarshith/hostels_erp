import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Sparkles, Building2, Utensils, Bed, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { VERIFIED_CONTACTS } from '@/lib/data/branches';

export default function GalleryPage() {
  const galleryItems = [
    {
      title: 'DEVI MANSION (The Boys Town)',
      category: 'Flagship Building',
      branch: 'Boys Hostel Branch 1',
      desc: 'Newly built luxury campus on Street 8, Rallaguda Road with attached washrooms, in-house gym, and parking.',
      image: '/images/branches/branch1-main.svg',
    },
    {
      title: 'Spacious 2-Sharing Attached Washroom Room',
      category: 'Bedrooms',
      branch: 'Devi Mansion',
      desc: 'Ergonomic wooden cot beds, personal lockable steel wardrobes, study desks, and geyser-equipped bathrooms.',
      image: '/images/branches/room-boys-1.svg',
    },
    {
      title: 'Boys Hostel Branch 2 (Airport Shift Quarters)',
      category: 'Airport Enclave',
      branch: 'Branch 2',
      desc: 'Configured for RGIA airport professionals with 24/7 entry assistance and quiet daytime hours.',
      image: '/images/branches/branch2-main.svg',
    },
    {
      title: 'Boys Hostel Branch 3 (Collegiate Campus Hub)',
      category: 'Academic Hub',
      branch: 'Branch 3',
      desc: 'Academic environment with high-speed fiber internet and peaceful study areas near Shamshabad colleges.',
      image: '/images/branches/branch3-main.svg',
    },
    {
      title: 'Boys Hostel Branch 4 (Executive Wing)',
      category: 'Executive Living',
      branch: 'Branch 4',
      desc: 'Quiet residential surroundings in Madhura Nagar with spacious rooms and two-wheeler parking.',
      image: '/images/branches/branch4-main.svg',
    },
    {
      title: 'Girls Hostel Branch 1 (Secured Enclave)',
      category: 'Girls Enclave',
      branch: 'Branch 5',
      desc: 'High-security dedicated girls property with resident lady wardens, biometric access, and 24/7 CCTV.',
      image: '/images/branches/branch5-main.svg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16 bg-[#F5F1E9]">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="badge-mono border-[#D6A85F] text-[#142B45]">
          CAMPUS PHOTO GALLERY
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#142B45]">
          DEVI Hostels Visual Showcase
        </h1>
        <p className="text-[#263447] text-sm sm:text-base leading-relaxed">
          Inspect our rooms, facilities, and campus locations across all five branches in Shamshabad.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={VERIFIED_CONTACTS.instagram_profile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-luxury text-xs py-2 px-4 flex items-center gap-1.5"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#D6A85F]" />
            <span>Live Videos on Instagram ({VERIFIED_CONTACTS.instagram_handle})</span>
          </a>
          <a
            href={VERIFIED_CONTACTS.google_knowledge_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-luxury text-xs py-2 px-4 flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#D6A85F]" />
            <span>Google Maps Photos & Reviews (4.8★)</span>
          </a>
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="card-editorial overflow-hidden bg-[#FFFFFF] border border-[#E5E0D7] flex flex-col group"
          >
            <div className="h-52 relative border-b border-[#E5E0D7] bg-[#142B45]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute top-3 left-3 z-10">
                <span className="badge-mono text-[9px] bg-[#FFFFFF] border-[#E5E0D7] text-[#142B45]">
                  {item.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 z-10">
                <span className="badge-mono text-[9px] bg-[#142B45] text-[#FFFFFF] border-0">
                  {item.branch}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#142B45]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#718096] mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E0D7] flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#477B70]">
                  Verified Campus
                </span>
                <Link
                  href="/enquiry"
                  className="font-mono text-xs font-bold text-[#142B45] hover:underline flex items-center gap-1"
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
