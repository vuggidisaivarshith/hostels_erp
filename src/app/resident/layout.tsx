'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  User,
  Building2,
  FileText,
  CreditCard,
  Wallet,
  ShieldCheck,
  Receipt,
  Bell,
  LifeBuoy,
  LogOut,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Resident } from '@/types/database';

export default function ResidentPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // If on login page, render without the portal sidebar/header
  if (pathname === '/resident/login') {
    return <>{children}</>;
  }

  const [resident, setResident] = useState<Resident | null>(null);
  const [loading, setLoading] = useState(true);

  // Available demo residents for instant switcher
  const demoResidentIds = [
    { id: 'DV1-1-00001', label: 'Aditya Sai (Student • Branch 1)' },
    { id: 'DV2-2-00002', label: 'Sumanth Nair (IndiGo Shift • Branch 2)' },
    { id: 'DV5-1-00003', label: 'Pooja Hegde (Air India • Girls Branch 1)' },
  ];

  const fetchResidentData = async (resId?: string) => {
    setLoading(true);
    try {
      // Check cookie or default to DV1-1-00001
      let targetId = resId;
      if (!targetId) {
        const match = document.cookie.match(/devi_resident_id=([^;]+)/);
        targetId = match ? match[1] : 'DV1-1-00001';
      }

      const res = await fetch(`/api/residents/${targetId}`);
      const json = await res.json();
      if (json.success && json.data?.resident) {
        setResident(json.data.resident);
        document.cookie = `devi_resident_id=${json.data.resident.resident_id}; path=/; max-age=604800`;
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResidentData();
  }, []);

  const handleSwitchResident = (newId: string) => {
    document.cookie = `devi_resident_id=${newId}; path=/; max-age=604800`;
    fetchResidentData(newId);
  };

  const portalNav = [
    { name: 'Dashboard', href: '/resident/dashboard', icon: LayoutDashboard },
    { name: 'Rent Invoices & Pay', href: '/resident/invoices', icon: FileText, highlight: true },
    { name: 'Payment History', href: '/resident/payments', icon: CreditCard, highlight: true },
    { name: 'Advance Rent', href: '/resident/advance', icon: Wallet },
    { name: 'Security Deposit', href: '/resident/deposits', icon: ShieldCheck },
    { name: 'Digital Receipts', href: '/resident/receipts', icon: Receipt },
    { name: 'My Profile', href: '/resident/profile', icon: User },
    { name: 'My Hostel & Room', href: '/resident/my-hostel', icon: Building2 },
    { name: 'Notifications', href: '/resident/notifications', icon: Bell },
    { name: 'Support', href: '/resident/support', icon: LifeBuoy },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] flex flex-col">
      {/* Resident Top Identity Banner */}
      <div className="bg-[#0F172A] text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 font-serif font-black text-xl flex items-center justify-center shadow-md">
              {resident?.full_name?.slice(0, 2).toUpperCase() || 'DH'}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-serif font-bold text-white">
                  {resident?.full_name || 'Loading Resident Profile...'}
                </h2>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {resident?.resident_id || 'DV1-1-XXXXX'}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  resident?.category === 'student' ? 'bg-blue-500/20 text-blue-300' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {resident?.category === 'student' ? '🎓 College Student' : '✈️ RGIA Airport Staff'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Branch {resident?.current_branch_code} • Floor {resident?.current_floor_number} • Room {resident?.current_room_number} (Bed {resident?.current_bed_number})
              </p>
            </div>
          </div>

          {/* Quick Demo Profile Switcher & Direct Pay CTA */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            <Link
              href="/resident/invoices"
              className="btn-emerald-cta text-xs py-1.5 px-3 flex items-center gap-1.5"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay Rent Online</span>
            </Link>

            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs">
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">Profile:</span>
              <select
                value={resident?.resident_id || 'DV1-1-00001'}
                onChange={(e) => handleSwitchResident(e.target.value)}
                className="bg-transparent text-amber-300 text-xs font-bold focus:outline-none cursor-pointer"
              >
                {demoResidentIds.map((d) => (
                  <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            <Link
              href="/resident/login"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Sign Out / Change Resident"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subnavigation Bar with Clear Payment & Ledger Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-1 overflow-x-auto py-2.5 scrollbar-none">
            {portalNav.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : item.highlight
                      ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-bold'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.name}
                  {item.highlight && !active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
