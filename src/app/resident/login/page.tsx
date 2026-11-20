'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserCheck, Smartphone, KeyRound, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export default function ResidentLoginPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<'otp' | 'password'>('otp');

  // Method 1: Mobile + OTP
  const [phone, setPhone] = useState('9849111222');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('123456');

  // Method 2: Resident ID + Password
  const [residentId, setResidentId] = useState('DV1-1-00001');
  const [password, setPassword] = useState('devi123');

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setStatusMessage({
        type: 'success',
        text: `OTP dispatched to +91 ${cleanPhone}. (Use demo verification code 123456)`
      });
    }, 400);
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
    <div className="max-w-md mx-auto px-4 py-16 space-y-8">
      {/* Brand Header */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto shadow-xl">
          DH
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          DEVI Resident Portal
        </h1>
        <p className="text-xs text-slate-400">
          Sign in to view your room allotment, monthly rent invoices, and digital receipts.
        </p>
      </div>

      {/* Login Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Dual Auth Switcher Tabs */}
        <div className="bg-slate-950 p-1.5 rounded-xl border border-slate-800 grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={() => {
              setAuthMethod('otp');
              setStatusMessage(null);
            }}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              authMethod === 'otp'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
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
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              authMethod === 'password'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            Resident ID
          </button>
        </div>

        {/* Status Feedback */}
        {statusMessage && (
          <div className={`p-4 rounded-xl text-xs font-semibold ${
            statusMessage.type === 'error'
              ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
              : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
          }`}>
            {statusMessage.text}
          </div>
        )}

        {/* Quick Demo Credentials Assistant */}
        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
          <p className="font-bold text-amber-400 uppercase text-[10px]">Demo Resident Test Accounts:</p>
          <p>• <strong>Student:</strong> Phone: <code>9849111222</code> | ID: <code>DV1-1-00001</code></p>
          <p>• <strong>Airport Staff:</strong> Phone: <code>9876500111</code> | ID: <code>DV2-2-00002</code></p>
          <p>• <strong>Girls Branch:</strong> Phone: <code>9701234567</code> | ID: <code>DV5-1-00003</code></p>
          <p className="text-[10px] text-slate-500">Default Password: <code>devi123</code> | Demo OTP: <code>123456</code></p>
        </div>

        {/* METHOD 1: Mobile + OTP Form */}
        {authMethod === 'otp' ? (
          !otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Registered Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9849111222"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Sending OTP...' : 'Send Login OTP'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Enter 6-Digit OTP Code
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="123456"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-center text-lg tracking-widest font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
              >
                {loading ? 'Verifying...' : 'Verify OTP & Enter Portal'}
              </button>

              <button
                type="button"
                onClick={() => setOtpSent(false)}
                className="w-full text-center text-xs text-slate-400 hover:text-white"
              >
                Change mobile number
              </button>
            </form>
          )
        ) : (
          /* METHOD 2: Resident ID + Password Form */
          <form onSubmit={handlePasswordLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                DEVI Resident ID
              </label>
              <input
                type="text"
                required
                value={residentId}
                onChange={(e) => setResidentId(e.target.value)}
                placeholder="e.g. DV1-1-00001"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 font-mono uppercase"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Account Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              {loading ? 'Authenticating...' : 'Sign In with Resident ID'}
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400 space-y-2">
          <p>
            Not a resident yet?{' '}
            <Link href="/enquiry" className="text-amber-400 font-semibold hover:underline">
              Submit Admission Enquiry
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
