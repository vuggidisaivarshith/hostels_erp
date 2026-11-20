'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Shield,
  Building2,
  Lock,
  Mail,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide your staff email and password.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/staff-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed. Please verify your credentials.');
      }

      // Successfully authenticated on server and session cookie set
      router.push('/admin');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E9] py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-md mx-auto w-full space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#142B45] text-white flex items-center justify-center font-serif font-bold text-lg">
              DM
            </div>
            <span className="font-serif text-2xl font-bold text-[#142B45]">DEVI HOSTELS</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 badge-mono border-[#D6A85F] text-[#142B45]">
            <Shield className="w-3 h-3 text-[#477B70]" />
            <span>STAFF & MANAGEMENT PORTAL</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#142B45]">
            Administrative Sign In
          </h1>
          <p className="text-[#718096] text-xs max-w-sm mx-auto">
            Authorized management gateway for Owner <strong>MARPINA PRADEEP</strong>, Branch Managers, Accountants, and Wardens across all 5 branches.
          </p>
        </div>

        {/* Login Card */}
        <div className="card-editorial p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E0D7] shadow-sm space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#142B45] mb-1.5">
                Staff Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#718096] absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@devihostels.com"
                  className="w-full bg-[#F5F1E9] border border-[#E5E0D7] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#142B45] focus:outline-none focus:border-[#D6A85F]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-[#142B45]">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#718096] absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#F5F1E9] border border-[#E5E0D7] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#142B45] focus:outline-none focus:border-[#D6A85F]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary-navy w-full py-3 text-xs justify-center flex items-center gap-2 mt-2"
            >
              <span>{loading ? 'Verifying Credentials...' : 'Sign In to Management'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-[#E5E0D7] text-center text-xs text-[#718096] space-y-2">
            <p className="text-[11px]">
              Hostel Resident?{' '}
              <Link href="/resident/login" className="text-[#142B45] font-bold hover:underline">
                Access Resident Self-Service Portal →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
