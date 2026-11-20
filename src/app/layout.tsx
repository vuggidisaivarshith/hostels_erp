import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DEVI HOSTELS — Premium Student & RGIA Airport Staff Accommodation',
  description:
    'DEVI HOSTELS operates 5 premier branches in Shamshabad, Hyderabad near Rajiv Gandhi International Airport (RGIA). Homely South & North Indian food, high-speed Wi-Fi, 24/7 biometric security, and dedicated shift facilities for students and working professionals.',
  keywords: [
    'Devi Hostels',
    'Hostels in Shamshabad',
    'Hostel near RGIA airport Hyderabad',
    'Airport employee accommodation Hyderabad',
    'Student hostel Shamshabad',
    'Girls hostel Shamshabad',
    'Boys hostel Shamshabad',
    'Marpina Pradeep hostel',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
