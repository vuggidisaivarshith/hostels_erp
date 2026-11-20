'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Building2,
  GraduationCap,
  Plane,
  Shield,
  User,
  ChevronDown
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { VERIFIED_CONTACTS } from '@/lib/data/branches';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Branches (5)', href: '/branches' },
    { name: 'Students', href: '/student-accommodation' },
    { name: 'Airport Professionals', href: '/airport-employee-accommodation' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E5E0D7] text-[#142B45] shadow-xs">
      {/* Top Verified Contact & Telemetry Bar */}
      <div className="bg-[#142B45] text-[#FFFFFF] text-[11px] py-1.5 px-4 font-mono tracking-wider border-b border-[#1F3C5F]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#477B70] animate-pulse" />
            <span className="text-[#F5F1E9]">
              DEVI HOSTELS & DEVI MANSION • 5 Centralized Branches • Shamshabad, Hyderabad
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10.5px]">
            <a
              href={VERIFIED_CONTACTS.instagram_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-[#E5E0D7] hover:text-[#D6A85F] transition-colors"
            >
              <InstagramIcon className="w-3 h-3" /> {VERIFIED_CONTACTS.instagram_handle}
            </a>
            <a
              href={`tel:${VERIFIED_CONTACTS.primary_phone}`}
              className="flex items-center gap-1 text-[#D6A85F] hover:underline font-bold"
            >
              <Phone className="w-3 h-3" /> {VERIFIED_CONTACTS.primary_phone}
            </a>
            <Link
              href="/login"
              className="text-[#E5E0D7] hover:text-[#FFFFFF] flex items-center gap-1 transition-colors pl-2 border-l border-[#1F3C5F]"
            >
              <User className="w-3 h-3 text-[#D6A85F]" />
              <span>Portal Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#142B45] text-[#FFFFFF] flex items-center justify-center font-serif text-lg font-bold border border-[#1F3C5F] shadow-xs group-hover:scale-105 transition-transform duration-200">
              DM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold tracking-tight text-[#142B45]">
                  DEVI HOSTELS
                </span>
                <span className="badge-mono hidden sm:inline-flex text-[9px] py-0.5 px-1.5 border-[#D6A85F]/50 text-[#142B45]">
                  DEVI MANSION
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#718096] uppercase">
                Shamshabad • Hyderabad • Near RGIA
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-[#263447]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    active
                      ? 'text-[#142B45] font-bold bg-[#F5F1E9] border-b-2 border-[#142B45]'
                      : 'hover:text-[#142B45] hover:bg-[#F5F1E9]/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/resident/login"
              className="px-3 py-2 rounded-md text-xs font-bold text-[#142B45] hover:bg-[#F5F1E9] flex items-center gap-1"
            >
              <User className="w-3.5 h-3.5 text-[#D6A85F]" />
              <span>Resident Login</span>
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${VERIFIED_CONTACTS.whatsapp_number}?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-cta"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link href="/enquiry" className="btn-primary-navy">
              <span>Enquire Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/enquiry" className="btn-primary-navy py-2 px-3 text-[10px]">
              Enquire
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#142B45] hover:bg-[#F5F1E9] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E5E0D7] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#F5F1E9] text-[#142B45] font-bold'
                    : 'text-[#263447] hover:bg-[#F5F1E9]/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5E0D7] grid grid-cols-2 gap-2">
            <Link
              href="/resident/login"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-lg bg-[#F5F1E9] border border-[#E5E0D7] text-[#142B45] font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-[#D6A85F]" />
              <span>Resident Login</span>
            </Link>
            <Link
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-lg bg-[#F5F1E9] border border-[#E5E0D7] text-[#142B45] font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-[#477B70]" />
              <span>Staff Portal</span>
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${VERIFIED_CONTACTS.whatsapp_number}?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-cta w-full py-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (+91 99898 97705)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
