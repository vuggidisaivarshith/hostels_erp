'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DEVI_BRANCHES } from '@/lib/data/branches';
import { CustomerCategory, Gender, RoomSharing } from '@/types/database';
import { CheckCircle2, User, Phone, Mail, Building, Briefcase, Calendar, ShieldCheck, ArrowRight, ArrowLeft, Send, Sparkles } from 'lucide-react';

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const initialBranch = searchParams.get('branch');

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [category, setCategory] = useState<CustomerCategory>('student');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  
  // Emergency Contact
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [emergencyRelation, setEmergencyRelation] = useState('Parent');

  // Stay Preferences
  const [preferredBranchId, setPreferredBranchId] = useState(
    initialBranch ? `b${initialBranch}-boys-branch-${initialBranch}` : DEVI_BRANCHES[0].id
  );
  const [sharingPreference, setSharingPreference] = useState<RoomSharing>('2_sharing');
  const [expectedJoiningDate, setExpectedJoiningDate] = useState(
    new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
  );

  // Student specific
  const [collegeName, setCollegeName] = useState('');
  const [course, setCourse] = useState('');
  const [academicYear, setAcademicYear] = useState('1st Year');
  const [parentPhone, setParentPhone] = useState('');

  // Airport Employee specific
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [shiftTiming, setShiftTiming] = useState('Rotational Shifts');
  const [employeeId, setEmployeeId] = useState('');

  // Filter available branches based on gender
  const availableBranches = DEVI_BRANCHES.filter((b) => {
    if (gender === 'female') return b.gender_category === 'girls';
    return b.gender_category === 'boys';
  });

  const handleGenderChange = (newGender: Gender) => {
    setGender(newGender);
    if (newGender === 'female') {
      const girlsBranch = DEVI_BRANCHES.find((b) => b.gender_category === 'girls');
      if (girlsBranch) setPreferredBranchId(girlsBranch.id);
    } else {
      const boysBranch = DEVI_BRANCHES.find((b) => b.gender_category === 'boys');
      if (boysBranch) setPreferredBranchId(boysBranch.id);
    }
  };

  const validateStep1 = () => {
    if (!fullName.trim()) return 'Please enter your full name.';
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) return 'Please enter a valid 10-digit mobile number.';
    if (!emergencyName.trim()) return 'Please enter emergency contact name.';
    const cleanEmergPhone = emergencyPhone.replace(/\D/g, '');
    if (cleanEmergPhone.length < 10) return 'Please enter a valid emergency contact phone number.';
    return null;
  };

  const validateStep2 = () => {
    if (category === 'student') {
      if (!collegeName.trim()) return 'Please enter your college/institute name.';
      if (!course.trim()) return 'Please enter your degree/course.';
    } else {
      if (!company.trim()) return 'Please enter your employer or airline name.';
      if (!designation.trim()) return 'Please enter your role or designation.';
    }
    return null;
  };

  const handleNext = () => {
    setErrorMessage('');
    if (step === 1) {
      const err = validateStep1();
      if (err) {
        setErrorMessage(err);
        return;
      }
      setStep(2);
    } else if (step === 2) {
      const err = validateStep2();
      if (err) {
        setErrorMessage(err);
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitting(true);

    const payload = {
      category,
      full_name: fullName,
      phone,
      email,
      gender,
      emergency_contact_name: emergencyName,
      emergency_contact_phone: emergencyPhone,
      emergency_contact_relation: emergencyRelation,
      preferred_branch_id: preferredBranchId,
      room_sharing_preference: sharingPreference,
      expected_joining_date: expectedJoiningDate,
      ...(category === 'student'
        ? {
            student_college_name: collegeName,
            student_course: course,
            student_year: academicYear,
            student_parent_phone: parentPhone || emergencyPhone,
          }
        : {
            employee_company: company,
            employee_designation: designation,
            employee_shift_timing: shiftTiming,
            employee_id_number: employeeId,
          }),
    };

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit admission enquiry.');
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl space-y-6">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Admission Enquiry Received!
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-lg mx-auto">
          Thank you, <strong className="text-white">{fullName}</strong>. Your enquiry has been routed directly to the DEVI HOSTELS Central Admissions Desk.
        </p>
        <div className="bg-slate-950/80 rounded-xl p-4 text-xs text-slate-300 border border-slate-800 space-y-2 text-left">
          <p><strong className="text-amber-400">Preferred Location:</strong> {DEVI_BRANCHES.find(b => b.id === preferredBranchId)?.name || 'Shamshabad'}</p>
          <p><strong className="text-amber-400">Category:</strong> {category === 'student' ? 'College Student' : 'Airport / Aviation Professional'}</p>
          <p><strong className="text-amber-400">Expected Joining:</strong> {expectedJoiningDate}</p>
          <p><strong className="text-amber-400">Management Contact:</strong> Marpina Pradeep (+91 98480 12345)</p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:+919848012345"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            Call Management Now
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-3xl mx-auto overflow-hidden">
      {/* Step Progress Tracker */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {[
            { num: 1, title: 'Personal Info' },
            { num: 2, title: 'Profile Specifics' },
            { num: 3, title: 'Hostel & Dates' },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  step === s.num
                    ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/20'
                    : step > s.num
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
              </div>
              <span className={`text-xs hidden sm:inline font-medium ${step === s.num ? 'text-white' : 'text-slate-400'}`}>
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {errorMessage && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            {errorMessage}
          </div>
        )}

        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <User className="w-5 h-5 text-amber-500" />
                Step 1: Personal Information
              </h3>
              <p className="text-xs text-slate-400">
                Please enter your accurate contact information for admission verification.
              </p>
            </div>

            {/* Category Toggle */}
            <div className="bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCategory('student')}
                className={`py-2.5 px-4 rounded-lg text-xs font-bold transition-all ${
                  category === 'student'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🎓 College Student
              </button>
              <button
                type="button"
                onClick={() => setCategory('airport_employee')}
                className={`py-2.5 px-4 rounded-lg text-xs font-bold transition-all ${
                  category === 'airport_employee'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ✈️ RGIA Airport Staff
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Varma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Mobile Number (10 Digits) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9849012345"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. yourname@gmail.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Gender *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleGenderChange('male')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      gender === 'male'
                        ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Male (Boys Hostels 1-4)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleGenderChange('female')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      gender === 'female'
                        ? 'bg-rose-600/20 border-rose-500 text-rose-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Female (Girls Branch 1)
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Emergency Contact Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={emergencyName}
                    onChange={(e) => setEmergencyName(e.target.value)}
                    placeholder="e.g. Suresh Varma"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={emergencyPhone}
                    onChange={(e) => setEmergencyPhone(e.target.value)}
                    placeholder="e.g. 9849098765"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Relationship *
                  </label>
                  <select
                    value={emergencyRelation}
                    onChange={(e) => setEmergencyRelation(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Guardian">Guardian</option>
                    <option value="Colleague">Colleague / Friend</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Category Specifics */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                {category === 'student' ? (
                  <>🎓 College Student Academic Details</>
                ) : (
                  <>✈️ Airport / Aviation Employment Details</>
                )}
              </h3>
              <p className="text-xs text-slate-400">
                {category === 'student'
                  ? 'Verify your college enrolment for student mess and library access privileges.'
                  : 'Tailored for airport staff shift schedules near RGIA Shamshabad.'}
              </p>
            </div>

            {category === 'student' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    College / Institute Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. Vardhaman College of Engineering, Shamshabad"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Course / Degree & Branch *
                    </label>
                    <input
                      type="text"
                      required
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      placeholder="e.g. B.Tech Computer Science / Aviation"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Academic Year
                    </label>
                    <select
                      value={academicYear}
                      onChange={(e) => setAcademicYear(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="1st Year">1st Year / Fresher</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year (Final Year)</option>
                      <option value="Postgraduate">Postgraduate / Masters</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Parent / Guardian Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="Parent mobile number for updates & leave sanction"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Employer / Airline / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. IndiGo, Air India, AISATS, Çelebi, GMR"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Job Designation / Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="e.g. Ground Operations, Cabin Crew, Cargo Staff"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Shift Timing Pattern
                    </label>
                    <select
                      value={shiftTiming}
                      onChange={(e) => setShiftTiming(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Rotational Shifts">Rotational Day & Night Shifts</option>
                      <option value="Regular Day Shift">Regular Day Shift (9 AM - 6 PM)</option>
                      <option value="Night Shift">Night Shift Only (8 PM - 5 AM)</option>
                      <option value="Early Morning Flight Shift">Early Morning Flight Shift (4 AM - 1 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Employee ID / Badge No. (Optional)
                    </label>
                    <input
                      type="text"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      placeholder="Airport Entry Pass (AEP) or Company ID"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: Branch Selection & Joining Date */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-500" />
                Step 3: Branch & Room Preferences
              </h3>
              <p className="text-xs text-slate-400">
                Select your preferred branch from our five locations and your prospective move-in date.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Preferred Branch *
              </label>
              <div className="space-y-2">
                {availableBranches.map((b) => (
                  <label
                    key={b.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      preferredBranchId === b.id
                        ? 'bg-amber-500/10 border-amber-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="branch"
                      value={b.id}
                      checked={preferredBranchId === b.id}
                      onChange={() => setPreferredBranchId(b.id)}
                      className="mt-1 accent-amber-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">
                          Branch {b.branch_code}: {b.name}
                        </span>
                        <span className="text-xs font-bold text-amber-400">
                          ₹{b.starting_price_per_month.toLocaleString()} / mo
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{b.distance_from_rgia}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Room Sharing Preference *
                </label>
                <select
                  value={sharingPreference}
                  onChange={(e) => setSharingPreference(e.target.value as RoomSharing)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="1_sharing">1-Sharing (Private Room)</option>
                  <option value="2_sharing">2-Sharing (Standard Comfort)</option>
                  <option value="3_sharing">3-Sharing (Economy)</option>
                  <option value="4_sharing">4-Sharing (Budget Friendly)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Expected Joining Date *
                </label>
                <input
                  type="date"
                  required
                  value={expectedJoiningDate}
                  onChange={(e) => setExpectedJoiningDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="text-white font-semibold">Included in every DEVI Hostels bed:</p>
              <p>✓ 3-times daily freshly prepared hygienic South & North Indian food</p>
              <p>✓ High-speed unlimited Wi-Fi, daily housekeeping, 24/7 hot water</p>
              <p>✓ Monitored CCTV, biometric security, and dedicated resident support</p>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              Continue to Step {step + 1}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50"
            >
              {submitting ? (
                <>Submitting Enquiry...</>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Submit Admission Enquiry
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
