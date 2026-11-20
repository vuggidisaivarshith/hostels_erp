'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Smartphone, KeyRound, ArrowRight, Lock, AlertCircle } from 'lucide-react';

export default function ResidentLoginPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<'otp' | 'password'>('otp');

  // Method 1: Mobile + OTP
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  // Method 2: Resident ID + Password
  const [residentId, setResidentId] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (cleanPhone.length !== 10) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanPhone }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch verification OTP.');
      }

      setOtpSent(true);
      setStatusMessage({
        type: 'success',
        text: data.message || `Verification code sent to +91 ${cleanPhone}.`,
      });
    } catch (err) {
      setStatusMessage({ type: 'error', text: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/auth/resident-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: 'otp',
          phone,
          otp: otpCode,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed.');
      }

      router.push('/resident/dashboard');
    } catch (err) {
      setStatusMessage({ type: 'error', text: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/auth/resident-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: 'password',
          resident_id: residentId,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed.');
      }

      router.push('/resident/dashboard');
    } catch (err) {
      setStatusMessage({ type: 'error', text: (err as Error).message });
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
              DH
            </div>
            <span className="font-serif text-2xl font-bold text-[#142B45]">DEVI HOSTELS</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 badge-mono border-[#D6A85F] text-[#142B45]">
            <span>RESIDENT SELF-SERVICE PORTAL</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#142B45]">
            Resident Sign In
          </h1>
          <p className="text-xs text-[#718096]">
            Sign in to access rent invoices, online UPI payments, advance balance, and digital receipts.
          </p>
        </div>

        {/* Login Card */}
        <div className="card-editorial p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E0D7] shadow-sm space-y-6">
          {/* Dual Auth Switcher Tabs */}
          <div className="bg-[#F5F1E9] p-1.5 rounded-xl border border-[#E5E0D7] grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => {
                setAuthMethod('otp');
                setStatusMessage(null);
              }}
              className={`py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                authMethod === 'otp'
                  ? 'bg-white text-[#142B45] shadow-xs border border-[#E5E0D7]'
                  : 'text-[#718096] hover:text-[#142B45]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Mobile + OTP
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMethod('password');
                setStatusMessage(null);
              }}
              className={`py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                authMethod === 'password'
                  ? 'bg-white text-[#142B45] shadow-xs border border-[#E5E0D7]'
                  : 'text-[#718096] hover:text-[#142B45]'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              Resident ID
            </button>
          </div>

          {/* Status Feedback */}
          {statusMessage && (
            <div className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2 ${
              statusMessage.type === 'error'
                ? 'bg-rose-50 border border-rose-200 text-rose-800'
                : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
            }`}>
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* METHOD 1: Mobile + OTP Form */}
          {authMethod === 'otp' ? (
            !otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#142B45] mb-1.5">
                    Registered Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-xs font-bold text-[#718096]">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98XXXXXXXX"
                      maxLength={10}
                      className="w-full bg-[#F5F1E9] border border-[#E5E0D7] rounded-xl pl-12 pr-4 py-2.5 text-xs text-[#142B45] focus:outline-none focus:border-[#D6A85F] font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-navy w-full py-3 text-xs justify-center flex items-center gap-2"
                >
                  <span>{loading ? 'Dispatching OTP...' : 'Send Login OTP'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#142B45] mb-1.5">
                    Enter 6-Digit OTP Code
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="••••••"
                    className="w-full bg-[#F5F1E9] border border-[#E5E0D7] rounded-xl px-4 py-2.5 text-center text-lg tracking-widest font-mono text-[#142B45] focus:outline-none focus:border-[#D6A85F]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-champagne-gold w-full py-3 text-xs justify-center flex items-center gap-2"
                >
                  <span>{loading ? 'Verifying...' : 'Verify OTP & Enter Portal'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setOtpSent(false);
                    setOtpCode('');
                  }}
                  className="w-full text-center text-xs text-[#718096] hover:text-[#142B45]"
                >
                  Change mobile number
                </button>
              </form>
            )
          ) : (
            /* METHOD 2: Resident ID + Password Form */
            <form onSubmit={handlePasswordLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#142B45] mb-1.5">
                  DEVI Resident ID
                </label>
                <input
                  type="text"
                  required
                  value={residentId}
                  onChange={(e) => setResidentId(e.target.value)}
                  placeholder="e.g. DV1-1-00001"
                  className="w-full bg-[#F5F1E9] border border-[#E5E0D7] rounded-xl px-4 py-2.5 text-xs text-[#142B45] focus:outline-none focus:border-[#D6A85F] font-mono uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#142B45] mb-1.5">
                  Account Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#F5F1E9] border border-[#E5E0D7] rounded-xl px-4 py-2.5 text-xs text-[#142B45] focus:outline-none focus:border-[#D6A85F]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary-navy w-full py-3 text-xs justify-center flex items-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>{loading ? 'Authenticating...' : 'Sign In with Resident ID'}</span>
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-[#E5E0D7] text-center text-xs text-[#718096] space-y-2">
            <p>
              Not a resident yet?{' '}
              <Link href="/enquiry" className="text-[#142B45] font-bold hover:underline">
                Submit Admission Enquiry
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
