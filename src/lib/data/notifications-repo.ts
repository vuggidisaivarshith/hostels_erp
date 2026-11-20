import { getResidentById, getResidents } from './residents-repo';

export type NotificationChannel = 'whatsapp' | 'email' | 'sms';

export type NotificationTemplate =
  | 'admission_welcome'
  | 'invoice_generated'
  | 'payment_reminder'
  | 'payment_receipt'
  | 'overdue_escalation'
  | 'transfer_confirmed'
  | 'checkout_settlement'
  | 'complaint_update'
  | 'broadcast_announcement';

export interface NotificationRecord {
  id: string;
  resident_id: string;
  devi_resident_id: string;
  recipient_name: string;
  recipient_phone: string;
  recipient_email?: string;
  channel: NotificationChannel;
  template: NotificationTemplate;
  title: string;
  body: string;
  status: 'delivered' | 'sent' | 'queued' | 'failed';
  metadata?: Record<string, any>;
  sent_at: string;
}

// In-Memory Notification Store with realistic seeded notifications
let notificationsStore: NotificationRecord[] = [
  {
    id: 'notif-001',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    recipient_name: 'Aditya Sai Krishna',
    recipient_phone: '+91 98480 12345',
    recipient_email: 'aditya.k@gmail.com',
    channel: 'whatsapp',
    template: 'admission_welcome',
    title: 'Welcome to DEVI Hostels',
    body: 'Dear Aditya Sai Krishna, Welcome to DEVI Hostels! Your permanent Resident ID is DV1-1-00001. Branch: Boys Hostel Branch 1, Room: 101, Bed: A. Access your resident portal at https://devihostels.com/resident/login',
    status: 'delivered',
    metadata: { branch_code: 1, room_number: '101' },
    sent_at: '2026-11-01 10:15:00',
  },
  {
    id: 'notif-002',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    recipient_name: 'Aditya Sai Krishna',
    recipient_phone: '+91 98480 12345',
    recipient_email: 'aditya.k@gmail.com',
    channel: 'email',
    template: 'payment_receipt',
    title: 'Payment Receipt: RCPT-2026-001',
    body: 'Thank you! We have received your rent payment of ₹7,000 for Invoice INV-2026-001 via Direct UPI. Receipt RCPT-2026-001 is now available for download.',
    status: 'delivered',
    metadata: { receipt_number: 'RCPT-2026-001', amount: 7000 },
    sent_at: '2026-11-01 11:30:00',
  },
  {
    id: 'notif-003',
    resident_id: 'res-002',
    devi_resident_id: 'DV2-2-00002',
    recipient_name: 'Sumanth Nair',
    recipient_phone: '+91 98480 23456',
    recipient_email: 'sumanth.n@airindia.in',
    channel: 'whatsapp',
    template: 'invoice_generated',
    title: 'Rent Invoice Generated',
    body: 'Dear Sumanth Nair, your monthly rent invoice INV-2026-002 for period 2026-11-15 to 2026-12-14 is ready. Total payable: ₹8,500. Due date: 2026-11-15.',
    status: 'delivered',
    metadata: { invoice_number: 'INV-2026-002', balance_due: 8500 },
    sent_at: '2026-11-10 09:00:00',
  },
  {
    id: 'notif-004',
    resident_id: 'res-003',
    devi_resident_id: 'DV5-1-00003',
    recipient_name: 'Pooja Hegde',
    recipient_phone: '+91 98480 34567',
    recipient_email: 'pooja.h@gmrgroup.in',
    channel: 'sms',
    template: 'admission_welcome',
    title: 'Admission Confirmed',
    body: 'DEVI HOSTELS: Your admission is confirmed at Girls Hostel Branch 1. Permanent ID: DV5-1-00003. Security deposit escrow logged: Rs 15,000.',
    status: 'delivered',
    metadata: { branch_code: 5, room_number: '101' },
    sent_at: '2026-11-10 14:20:00',
  },
];

// Template Formatter Helper
export function renderNotificationContent(
  template: NotificationTemplate,
  data: {
    resident_name: string;
    devi_resident_id: string;
    branch_name?: string;
    room_number?: string;
    bed_number?: string;
    amount?: number;
    invoice_number?: string;
    receipt_number?: string;
    due_date?: string;
    period_start?: string;
    period_end?: string;
    days_overdue?: number;
    custom_message?: string;
  }
): { title: string; body: string } {
  switch (template) {
    case 'admission_welcome':
      return {
        title: 'Welcome to DEVI Hostels!',
        body: `Dear ${data.resident_name},\n\nWelcome to DEVI Hostels! Your permanent Resident ID is ${data.devi_resident_id}.\nBranch: ${data.branch_name || 'DEVI Hostels'}\nRoom: ${data.room_number || ''} (Bed ${data.bed_number || ''})\n\nLog in to your 24/7 self-service resident portal: https://devihostels.com/resident/login\n\nProprietor: MARPINA PRADEEP, Shamshabad Central Office.`,
      };

    case 'invoice_generated':
      return {
        title: `Rent Invoice Generated: ${data.invoice_number}`,
        body: `Dear ${data.resident_name},\n\nYour monthly rent invoice ${data.invoice_number} has been generated for period ${data.period_start} to ${data.period_end}.\nAmount Due: ₹${data.amount?.toLocaleString()}\nDue Date: ${data.due_date}\n\nPay online instantly via UPI / Cards: https://devihostels.com/resident/invoices`,
      };

    case 'payment_reminder':
      return {
        title: `Payment Reminder: Rent Due for ${data.devi_resident_id}`,
        body: `Dear ${data.resident_name},\n\nThis is a gentle reminder that your monthly hostel rent of ₹${data.amount?.toLocaleString()} is due on ${data.due_date}.\n\nPay online conveniently via Instant UPI: https://devihostels.com/resident/invoices`,
      };

    case 'payment_receipt':
      return {
        title: `Payment Receipt: ${data.receipt_number}`,
        body: `Dear ${data.resident_name},\n\nPayment Received! ₹${data.amount?.toLocaleString()} has been credited to your account.\nReceipt Number: ${data.receipt_number}\nInvoice Settled: ${data.invoice_number || 'Rent Due'}\n\nDownload digital receipt: https://devihostels.com/resident/receipts`,
      };

    case 'overdue_escalation':
      return {
        title: `URGENT: Overdue Rent Alert (${data.days_overdue || 0} Days Past Due)`,
        body: `URGENT NOTICE for ${data.resident_name} (${data.devi_resident_id}):\nYour hostel rent of ₹${data.amount?.toLocaleString()} is overdue by ${data.days_overdue || 0} days. Please clear your balance immediately to avoid late fee penalties or management escalation.\n\nHelpline: +91 94940 12345.`,
      };

    case 'transfer_confirmed':
      return {
        title: 'Room / Branch Transfer Confirmed',
        body: `Dear ${data.resident_name},\n\nYour transfer has been approved and completed. New Location: ${data.branch_name}, Room ${data.room_number}, Bed ${data.bed_number}.\nYour permanent Resident ID remains unchanged: ${data.devi_resident_id}.`,
      };

    case 'checkout_settlement':
      return {
        title: 'Checkout & Deposit Refund Settlement',
        body: `Dear ${data.resident_name},\n\nYour checkout inspection has been completed. Refundable deposit settlement of ₹${data.amount?.toLocaleString()} has been processed to your bank account. Thank you for staying at DEVI Hostels!`,
      };

    case 'complaint_update':
      return {
        title: 'Hostel Maintenance Update',
        body: `Dear ${data.resident_name},\n\nUpdate regarding your maintenance request: ${data.custom_message || 'Ticket is being resolved by branch maintenance warden.'}`,
      };

    case 'broadcast_announcement':
      return {
        title: 'Important DEVI Hostels Announcement',
        body: `DEVI Hostels Notice to all Residents:\n\n${data.custom_message || 'Scheduled maintenance alert.'}`,
      };

    default:
      return {
        title: 'DEVI Hostels Notification',
        body: data.custom_message || 'You have a new update from DEVI Hostels.',
      };
  }
}

// Dispatch a Notification (WhatsApp, Email, SMS)
export async function sendNotification(input: {
  resident_id: string;
  template: NotificationTemplate;
  channel?: NotificationChannel;
  channels?: NotificationChannel[];
  custom_data?: Record<string, any>;
}): Promise<{ success: boolean; records: NotificationRecord[]; error?: string }> {
  const resident = getResidentById(input.resident_id);
  if (!resident) {
    return { success: false, records: [], error: 'Resident not found.' };
  }

  const channelsToUse: NotificationChannel[] = input.channels || (input.channel ? [input.channel] : ['whatsapp', 'email']);
  const rendered = renderNotificationContent(input.template, {
    resident_name: resident.full_name,
    devi_resident_id: resident.resident_id,
    branch_name: `Branch ${resident.current_branch_code}`,
    room_number: resident.current_room_number,
    bed_number: resident.current_bed_number,
    ...input.custom_data,
  });

  const now = new Date();
  const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  const createdRecords: NotificationRecord[] = [];

  for (const ch of channelsToUse) {
    // In production, invoke official WhatsApp Cloud API, Resend Email API, or SMS Gateway:
    // e.g. await fetch('https://graph.facebook.com/v20.0/.../messages', { ... })
    // e.g. await resend.emails.send({ ... })
    const record: NotificationRecord = {
      id: `notif-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      resident_id: resident.id,
      devi_resident_id: resident.resident_id,
      recipient_name: resident.full_name,
      recipient_phone: resident.phone,
      recipient_email: resident.email,
      channel: ch,
      template: input.template,
      title: rendered.title,
      body: rendered.body,
      status: 'delivered', // simulated successful delivery
      metadata: input.custom_data,
      sent_at: timestamp,
    };

    notificationsStore.unshift(record);
    createdRecords.push(record);
  }

  return { success: true, records: createdRecords };
}

// Get Notifications
export function getNotifications(filter?: {
  residentId?: string;
  channel?: NotificationChannel;
  limit?: number;
}): NotificationRecord[] {
  let list = [...notificationsStore];
  if (filter?.residentId) {
    const search = filter.residentId.trim().toUpperCase();
    list = list.filter((n) => n.resident_id === filter.residentId || n.devi_resident_id.toUpperCase() === search);
  }
  if (filter?.channel) {
    list = list.filter((n) => n.channel === filter.channel);
  }
  if (filter?.limit) {
    list = list.slice(0, filter.limit);
  }
  return list;
}
