import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DEVI HOSTELS & DEVI MANSION — Premium Student & RGIA Airport Staff Accommodation',
  description:
    'DEVI HOSTELS & DEVI MANSION (The Boys Town). Operating 5 premier hostel branches in Shamshabad, Hyderabad near RGIA Airport. Homely food, attached washrooms, in-house gym, 24/7 security, high-speed Wi-Fi, and dedicated shift facilities.',
  keywords: [
    'Devi Hostels',
    'Devi Mansion',
    'The Boys Town Shamshabad',
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
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF9] text-[#1E293B] font-sans selection:bg-[#6957F5]/15 selection:text-[#0F172A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
