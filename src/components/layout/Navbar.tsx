'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  ShieldCheck,
  Building2,
  GraduationCap,
  Plane,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Branches (5)', href: '/branches' },
    { name: 'Students', href: '/student-accommodation', icon: GraduationCap },
    { name: 'Airport Staff', href: '/airport-employee-accommodation', icon: Plane },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resident Portal', href: '/resident/login' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-[#0F172A] shadow-xs">
      {/* Top Telemetry Banner */}
      <div className="bg-[#0F172A] text-white text-[11px] py-1.5 px-4 font-mono tracking-wider uppercase border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">
              DEVI MANSION & DEVI HOSTELS • 5 Centralized Branches • Shamshabad (Near RGIA)
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10.5px]">
            <span className="hidden md:inline text-slate-400">
              Proprietor: <strong className="text-slate-200 font-bold">MARPINA PRADEEP</strong>
            </span>
            <a
              href="https://www.instagram.com/devi_mansion_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <InstagramIcon className="w-3 h-3" /> @devi_mansion_
            </a>
            <a
              href="tel:+919989897705"
              className="flex items-center gap-1 text-emerald-400 hover:underline font-bold"
            >
              <Phone className="w-3 h-3" /> +91 99898 97705
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-white flex items-center justify-center font-serif text-lg font-bold border border-[#1E293B] shadow-sm group-hover:scale-105 transition-transform duration-200">
              DM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold tracking-tight text-[#0F172A]">
                  DEVI HOSTELS
                </span>
                <span className="badge-mono hidden sm:inline-flex text-[9px] py-0.5 px-1.5">
                  DEVI MANSION
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase">
                Shamshabad • Hyderabad • RGIA Hub
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-[#334155]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    active
                      ? 'text-[#0F172A] font-bold bg-slate-100 border-b-2 border-[#0F172A]'
                      : 'hover:text-[#0F172A] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs matching IDM Inky */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919989897705?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-cta"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link href="/enquiry" className="btn-primary-ink">
              <span>Book Bed</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/enquiry" className="btn-primary-ink py-2 px-3 text-[10px]">
              Book Bed
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-slate-100 text-[#0F172A] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/919989897705?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-cta w-full py-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 99898 97705)</span>
            </a>
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="btn-ghost-luxury w-full py-2.5 text-center"
            >
              Admin Management Portal →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
