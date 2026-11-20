'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  DollarSign,
  TrendingUp,
  CreditCard,
  FileText,
  ShieldCheck,
  Building2,
  Users,
  UserCheck,
  ArrowRightLeft,
  Mail,
  PieChart,
  LogOut,
  ChevronDown,
  Plus,
  Shield,
  Receipt,
  CheckCircle2
} from 'lucide-react';

export default function AdminPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // If on admin login page, render children without portal chrome
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const [activeRole, setActiveRole] = useState<string>('owner');
  const [activeName, setActiveName] = useState<string>('MARPINA PRADEEP');
  const [activeBranch, setActiveBranch] = useState<string>('All 5 Branches');

  useEffect(() => {
    // Read staff cookie or default to Owner
    const roleMatch = document.cookie.match(/devi_staff_role=([^;]+)/);
    const nameMatch = document.cookie.match(/devi_staff_name=([^;]+)/);
    const branchMatch = document.cookie.match(/devi_staff_branch=([^;]+)/);

    if (roleMatch) setActiveRole(roleMatch[1]);
    if (nameMatch) setActiveName(decodeURIComponent(nameMatch[1]));
    if (branchMatch && branchMatch[1] !== 'all') {
      setActiveBranch(`Branch ${branchMatch[1]}`);
    }
  }, [pathname]);

  const staffRolePresets = [
    { role: 'owner', name: 'MARPINA PRADEEP', branch: 'All 5 Branches (Global Control)', title: 'Owner / Super Admin' },
    { role: 'branch_manager_1', name: 'V. Ramesh Babu', branch: 'Branch 1 (Devi Mansion)', title: 'Branch 1 Manager' },
    { role: 'branch_manager_2', name: 'M. Anand Kumar', branch: 'Branch 2 (Airport Shift)', title: 'Branch 2 Manager (Airport)' },
    { role: 'accountant', name: 'K. Sridhar Rao', branch: 'All Branches (Central Ledger)', title: 'Central Accountant' },
    { role: 'warden', name: 'P. Sunitha Reddy', branch: 'Branch 5 (Girls Hostel)', title: 'Girls Hostel Warden' },
  ];

  const handleSwitchStaff = (preset: (typeof staffRolePresets)[0]) => {
    document.cookie = `devi_staff_role=${preset.role}; path=/; max-age=86400`;
    document.cookie = `devi_staff_name=${encodeURIComponent(preset.name)}; path=/; max-age=86400`;
    setActiveRole(preset.role);
    setActiveName(preset.name);
    setActiveBranch(preset.branch);
  };

  const navItems = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Finances Overview', href: '/admin/finances', icon: TrendingUp },
    { name: 'Rent Invoices', href: '/admin/finances/invoices', icon: FileText },
    { name: 'Payments Ledger', href: '/admin/finances/payments', icon: CreditCard },
    { name: 'Security Deposits', href: '/admin/finances/deposits', icon: ShieldCheck },
    { name: 'Financial Reports', href: '/admin/finances/reports', icon: PieChart },
    { name: 'Bed Inventory', href: '/admin/inventory', icon: Building2 },
    { name: 'Residents', href: '/admin/residents', icon: Users },
    { name: 'Admissions', href: '/admin/admissions', icon: UserCheck },
    { name: 'Operations & Transfers', href: '/admin/operations', icon: ArrowRightLeft },
    { name: 'Enquiries', href: '/admin/enquiries', icon: Mail },
    { name: 'Staff & Roles', href: '/admin/staff', icon: Shield },
    { name: 'Analytics & BI', href: '/admin/analytics', icon: PieChart },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] flex flex-col">
      {/* Top Staff Navigation Header */}
      <header className="bg-[#0F172A] text-white border-b border-[#1E293B] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-3">
            {/* Brand and Current Scope */}
            <div className="flex items-center gap-3">
              <Link href="/admin" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white text-[#0F172A] flex items-center justify-center font-serif font-black text-sm">
                  DM
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-bold tracking-tight text-white">
                      DEVI HOSTELS & DEVI MANSION
                    </span>
                    <span className="bg-amber-400 text-slate-950 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                      MANAGEMENT ERP
                    </span>
                  </div>
                  <p className="text-[10.5px] font-mono text-slate-400">
                    Active: <strong className="text-white font-bold">{activeName}</strong> • <span className="text-amber-300">{activeBranch}</span>
                  </p>
                </div>
              </Link>
            </div>

            {/* Role Switcher & Action CTA Buttons */}
            <div className="flex items-center flex-wrap gap-2.5 self-start sm:self-auto">
              {/* Role Switcher Dropdown */}
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs">
                <span className="text-slate-400 text-[11px] font-mono">Role:</span>
                <select
                  value={staffRolePresets.find(p => p.name === activeName)?.role || 'owner'}
                  onChange={(e) => {
                    const preset = staffRolePresets.find(p => p.role === e.target.value);
                    if (preset) handleSwitchStaff(preset);
                  }}
                  className="bg-transparent text-amber-300 font-bold text-xs focus:outline-none cursor-pointer"
                >
                  {staffRolePresets.map((p) => (
                    <option key={p.role} value={p.role} className="bg-slate-900 text-white">
                      {p.title} ({p.name})
                    </option>
                  ))}
                </select>
              </div>

              {/* Fast Financial Action: Record Payment */}
              <Link
                href="/admin/finances/payments"
                className="btn-emerald-cta text-xs py-1.5 px-3 flex items-center gap-1.5"
                title="Record Offline Cash or Direct UPI Collection"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Record Payment</span>
              </Link>

              {/* Fast Operational Action: New Admission */}
              <Link
                href="/admin/admissions"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs py-1.5 px-3 rounded-md transition-colors flex items-center gap-1"
                title="Admit New Student or Airport Staff Resident"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>New Admission</span>
              </Link>

              {/* Sign Out to Login Portal */}
              <Link
                href="/admin/login"
                className="text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-slate-800 transition-colors"
                title="Sign Out / Switch Account"
              >
                <LogOut className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Primary Persistent Tab Bar */}
        <div className="bg-[#1E293B]/90 border-t border-slate-700/60 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-1 py-1.5">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;
                const isFinance = item.href.startsWith('/admin/finances');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                      active
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                        : isFinance
                        ? 'text-emerald-300 hover:text-white hover:bg-slate-800/80'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                    {isFinance && !active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
