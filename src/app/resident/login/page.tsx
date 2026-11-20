'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UserCheck, Smartphone, KeyRound, ShieldAlert, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

export default function ResidentLoginPage() {
  const [authMethod, setAuthMethod] = useState<'otp' | 'password'>('otp');
  
  // Method 1: Mobile + OTP
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  
  // Method 2: Resident ID + Password
  const [residentId, setResidentId] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number registered with DEVI Hostels.' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setStatusMessage({
        type: 'success',
        text: `OTP sent to +91 ${cleanPhone}. (Phase 2 Live SMS Gateway Simulation: Use code 123456)`
      });
    }, 600);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode !== '123456' && otpCode.length < 4) {
      setStatusMessage({ type: 'error', text: 'Invalid OTP code. Please enter the verification code sent to your phone.' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatusMessage({
        type: 'info',
        text: 'Authentication validated! The full Resident Self-Service Dashboard (Invoices, UPI payments, Deposit balances) will unlock upon Phase 2 activation.'
      });
    }, 600);
  };

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!residentId.trim().toUpperCase().startsWith('DV')) {
      setStatusMessage({ type: 'error', text: 'Invalid Resident ID format. Must begin with DV[1-5]-[1-6]-[SERIAL] (e.g. DV1-1-00001).' });
      return;
    }
    if (password.length < 6) {
      setStatusMessage({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatusMessage({
        type: 'info',
        text: `Resident ID ${residentId.toUpperCase()} verified! Resident portal features are scheduled for Phase 2 activation.`
      });
    }, 600);
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
          Access your digital ID, monthly invoices, receipts, and advance rent balance.
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
              : statusMessage.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
              : 'bg-blue-500/10 border border-blue-500/30 text-blue-300'
          }`}>
            {statusMessage.text}
          </div>
        )}

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
                    placeholder="9849012345"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Enter the phone number registered during your hostel admission.
                </p>
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
              <p className="text-[11px] text-slate-500 mt-1">
                Format: DV[Branch]-[Floor]-[Number]
              </p>
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
          <p className="text-[11px] text-slate-500">
            For login assistance, call Owner Marpina Pradeep at +91 98480 12345
          </p>
        </div>
      </div>
    </div>
  );
}
