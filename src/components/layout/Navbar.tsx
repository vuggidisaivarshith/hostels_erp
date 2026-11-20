'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ShieldCheck, UserCheck, Building2, GraduationCap, Plane, Sparkles } from 'lucide-react';

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
    { name: 'FAQs', href: '/faqs' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-xs py-1.5 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Admissions Open for Academic Year & RGIA Airport Shifts • 5 Branches in Shamshabad</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline">Owner: <strong>Marpina Pradeep</strong></span>
            <a href="tel:+919848012345" className="flex items-center gap-1 hover:underline font-semibold">
              <Phone className="w-3 h-3" /> +91 98480 12345
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-md group-hover:scale-105 transition-transform duration-200">
              DH
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  DEVI HOSTELS
                </span>
                <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded">
                  5 Branches
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Shamshabad, Hyderabad • Near RGIA
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Resident Login & Enquiry */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/resident/login"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-colors"
            >
              <UserCheck className="w-4 h-4 text-amber-400" />
              Resident Login
            </Link>

            <Link
              href="/admin/enquiries"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
              title="Staff & Management Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              Staff
            </Link>

            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Admission Enquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/enquiry"
              className="text-xs font-bold px-3 py-1.5 rounded-md bg-amber-500 text-slate-950"
            >
              Enquire
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <Link
              href="/resident/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
            >
              <UserCheck className="w-4 h-4 text-amber-400" />
              Resident Login
            </Link>
            <Link
              href="/enquiry"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg bg-amber-500 text-slate-950"
            >
              <Sparkles className="w-4 h-4" />
              Admission Form
            </Link>
          </div>

          <div className="space-y-1 pt-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    active
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 opacity-75" />}
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/admin/enquiries"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800"
            >
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              Staff & Admin Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
