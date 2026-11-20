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
  ChevronDown,
  Lock,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
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
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-[#0F172A] shadow-xs">
      {/* Top Telemetry Banner with Direct Login Links */}
      <div className="bg-[#0F172A] text-white text-[11px] py-1.5 px-4 font-mono tracking-wider uppercase border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">
              DEVI MANSION & DEVI HOSTELS • 5 Centralized Branches • Shamshabad
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10.5px]">
            {/* Quick Portal Gateway Links */}
            <div className="flex items-center gap-3 pr-3 border-r border-slate-700">
              <Link
                href="/resident/login"
                className="text-amber-300 hover:text-white flex items-center gap-1 transition-colors font-bold"
              >
                <User className="w-3 h-3" />
                <span>Resident Login</span>
              </Link>
              <Link
                href="/admin/login"
                className="text-slate-300 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <Shield className="w-3 h-3" />
                <span>Staff / Admin</span>
              </Link>
            </div>

            <a
              href="https://www.instagram.com/devi_mansion_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
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

            {/* Portals Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                onBlur={() => setTimeout(() => setPortalDropdownOpen(false), 200)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-bold transition-colors ${
                  pathname.startsWith('/resident') || pathname.startsWith('/admin')
                    ? 'text-[#0F172A] bg-slate-100 border-b-2 border-[#0F172A]'
                    : 'text-[#365679] hover:bg-slate-50'
                }`}
              >
                <span>Portal Logins</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {portalDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-slate-200 shadow-xl py-2 z-50 text-left">
                  <div className="px-3 py-1.5 border-b border-slate-100">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Sign In To Your Account
                    </p>
                  </div>
                  <Link
                    href="/resident/login"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    <User className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="font-bold text-[#0F172A]">Resident Portal</p>
                      <p className="text-[10px] text-slate-500 font-normal">Pay rent, view invoices, bills</p>
                    </div>
                  </Link>
                  <Link
                    href="/admin/login"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="font-bold text-[#0F172A]">Staff & Admin Portal</p>
                      <p className="text-[10px] text-slate-500 font-normal">Owner, Branch Managers, Wardens</p>
                    </div>
                  </Link>
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link
                      href="/login"
                      className="block px-3 py-1.5 text-[11px] font-mono text-center text-[#365679] hover:underline"
                    >
                      Unified Gateway →
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
            <Link href="/login" className="btn-ghost-luxury py-1.5 px-2.5 text-[11px]">
              Login
            </Link>
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
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

          {/* Direct Mobile Portal Links */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-1">
              Portal Access:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/resident/login"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs flex flex-col items-center text-center gap-1"
              >
                <User className="w-4 h-4 text-amber-700" />
                <span>Resident Login</span>
              </Link>
              <Link
                href="/admin/login"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#0F172A] font-bold text-xs flex flex-col items-center text-center gap-1"
              >
                <Shield className="w-4 h-4 text-slate-700" />
                <span>Staff & Admin</span>
              </Link>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/919989897705?text=Hello%20Devi%20Hostels%20Management%2C%20I%20am%20enquiring%20about%20room%20availability%20in%20Shamshabad."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-cta w-full py-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 99898 97705)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
