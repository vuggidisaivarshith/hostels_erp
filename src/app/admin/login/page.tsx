'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Shield,
  Building2,
  Lock,
  Mail,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  CreditCard
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'owner' | 'branch_manager' | 'accountant' | 'warden'>('owner');
  const [selectedBranch, setSelectedBranch] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const demoAccounts = [
    {
      role: 'owner',
      title: 'Owner / Super Admin',
      name: 'MARPINA PRADEEP',
      email: 'pradeep@devihostels.com',
      branch: 'All 5 Branches (Global Control)',
      desc: 'Full financial access, approvals, staff management, audit logs',
    },
    {
      role: 'branch_manager',
      title: 'Branch 1 Manager',
      name: 'V. Ramesh Babu',
      email: 'ramesh.branch1@devihostels.com',
      branch: 'Branch 1 (Devi Mansion)',
      desc: 'Admissions, local room allocation, counter payments',
    },
    {
      role: 'branch_manager',
      title: 'Branch 2 Manager (Airport)',
      name: 'M. Anand Kumar',
      email: 'anand.branch2@devihostels.com',
      branch: 'Branch 2 (Airport Shift)',
      desc: 'Shift staff allocation, room vacancy, local collections',
    },
    {
      role: 'accountant',
      title: 'Central Accountant',
      name: 'K. Sridhar Rao',
      email: 'accounts@devihostels.com',
      branch: 'All Branches (Central Ledger)',
      desc: 'Invoicing, cash/UPI verification, advance & deposit ledgers',
    },
    {
      role: 'warden',
      title: 'Girls Hostel Warden',
      name: 'P. Sunitha Reddy',
      email: 'sunitha.warden@devihostels.com',
      branch: 'Branch 5 (Girls Hostel)',
      desc: 'Resident check-ins, complaints resolution, night curfews',
    },
  ];

  const handleQuickLogin = (demo: (typeof demoAccounts)[0]) => {
    setEmail(demo.email);
    setPassword('admin123');
    setSelectedRole(demo.role as any);
    document.cookie = `devi_staff_role=${demo.role}; path=/; max-age=86400`;
    document.cookie = `devi_staff_name=${encodeURIComponent(demo.name)}; path=/; max-age=86400`;
    router.push('/admin');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide email and password.');
      return;
    }
    setLoading(true);
    setError(null);

    // Simulate login & set session cookie
    document.cookie = `devi_staff_role=${selectedRole}; path=/; max-age=86400`;
    document.cookie = `devi_staff_email=${encodeURIComponent(email)}; path=/; max-age=86400`;
    document.cookie = `devi_staff_branch=${selectedBranch}; path=/; max-age=86400`;

    setTimeout(() => {
      router.push('/admin');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-white flex items-center justify-center font-serif font-bold text-lg">
              DM
            </div>
            <span className="font-serif text-2xl font-bold text-[#0F172A]">DEVI HOSTELS</span>
          </Link>
          <div className="inline-flex items-center gap-2 badge-mono">
            <Shield className="w-3 h-3 text-emerald-600" />
            <span>ADMINISTRATIVE & STAFF PORTAL ACCESS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Staff & Management Login
          </h1>
          <p className="text-[#334155] text-xs sm:text-sm max-w-md mx-auto">
            Authorized management gateway for Owner <strong>MARPINA PRADEEP</strong>, Branch Managers, Accountants, and Wardens across all 5 branches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Quick-Fill Demo Switcher */}
          <div className="lg:col-span-7 space-y-4">
            <div className="card-glass p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold uppercase text-[#0F172A]">
                  ⚡ 1-Click Role-Based Quick Sign-In
                </span>
                <span className="badge-mono text-[9px]">DEMO TEST MATRIX</span>
              </div>
              <p className="text-xs text-[#64748B]">
                Click any management role to instantly enter the operations hub with assigned branch permissions:
              </p>

              <div className="space-y-2.5">
                {demoAccounts.map((demo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickLogin(demo)}
                    className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-[#0F172A] bg-white hover:bg-slate-50 transition-all text-left flex items-start justify-between group shadow-2xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-[#0F172A] group-hover:text-[#365679]">
                          {demo.title}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded font-bold">
                          {demo.name}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-amber-700 font-semibold">{demo.branch}</p>
                      <p className="text-[11px] text-[#64748B]">{demo.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F172A] group-hover:translate-x-1 transition-all mt-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Manual Login Form */}
          <div className="lg:col-span-5">
            <div className="card-editorial p-6 sm:p-8 rounded-2xl bg-white space-y-5">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">Sign in with Credentials</h3>
                <p className="text-xs text-[#64748B] mt-0.5">Enter authorized staff email & password</p>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase font-bold text-[#334155] mb-1">
                    Management Role
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                  >
                    <option value="owner">Owner / Super Admin (MARPINA PRADEEP)</option>
                    <option value="branch_manager">Branch Manager (Single Branch)</option>
                    <option value="accountant">Central Accountant (All Branches)</option>
                    <option value="warden">Hostel Warden (Operations)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase font-bold text-[#334155] mb-1">
                    Staff Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="staff@devihostels.com"
                      className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0F172A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase font-bold text-[#334155] mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0F172A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-ink w-full py-3 text-xs"
                >
                  {loading ? 'Authenticating...' : 'Enter Operations Hub →'}
                </button>
              </form>

              <div className="pt-4 border-t border-slate-200 text-center">
                <Link
                  href="/resident/login"
                  className="text-xs text-[#365679] hover:underline font-semibold"
                >
                  Are you a Hostel Resident? Click here for Resident Portal →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
