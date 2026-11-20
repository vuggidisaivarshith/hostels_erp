import {
  Resident,
  ResidentInvoice,
  ResidentPayment,
  PaymentMethod,
  BranchCode
} from '@/types/database';
import { getResidents, getResidentById } from './residents-repo';
import { DEVI_BRANCHES } from './branches';
import crypto from 'crypto';

// Extended Financial Entities
export interface FinancialInvoice extends ResidentInvoice {
  resident_name: string;
  room_number: string;
  additional_charges: number;
  notes?: string;
  created_at: string;
}

export interface FinancialPayment extends ResidentPayment {
  resident_name: string;
  branch_code: 1 | 2 | 3 | 4 | 5;
  room_number: string;
  collector_name: string;
  collector_id?: string;
  remarks?: string;
  reversal_of_id?: string;
  is_reversed?: boolean;
  created_at: string;
}

export interface AdvanceEntry {
  id: string;
  resident_id: string;
  devi_resident_id: string;
  resident_name: string;
  type: 'credit' | 'debit_invoice' | 'refund';
  amount: number;
  balance_after: number;
  reference_invoice_id?: string;
  description: string;
  date: string;
}

export interface DepositEntry {
  id: string;
  resident_id: string;
  devi_resident_id: string;
  resident_name: string;
  type: 'deposit_received' | 'damage_deduction' | 'utility_deduction' | 'refund';
  amount: number;
  balance_after: number;
  remarks: string;
  date: string;
}

// Stores
let invoicesStore: FinancialInvoice[] = [
  {
    id: 'inv-101',
    invoice_number: 'INV-2026-001',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    resident_name: 'Aditya Sai Krishna',
    branch_code: 1,
    room_number: '102',
    billing_period_start: '2026-11-01',
    billing_period_end: '2026-11-30',
    rent_amount: 7000,
    additional_charges: 0,
    advance_adjusted: 0,
    total_payable: 7000,
    amount_paid: 7000,
    balance_due: 0,
    due_date: '2026-11-01',
    status: 'paid',
    created_at: '2026-11-01T08:00:00Z',
  },
  {
    id: 'inv-102',
    invoice_number: 'INV-2026-002',
    resident_id: 'res-002',
    devi_resident_id: 'DV2-2-00002',
    resident_name: 'Sumanth Nair',
    branch_code: 2,
    room_number: '201',
    billing_period_start: '2026-11-15',
    billing_period_end: '2026-12-14',
    rent_amount: 8500,
    additional_charges: 0,
    advance_adjusted: 0,
    total_payable: 8500,
    amount_paid: 8500,
    balance_due: 0,
    due_date: '2026-11-15',
    status: 'paid',
    created_at: '2026-11-15T08:00:00Z',
  },
  {
    id: 'inv-103',
    invoice_number: 'INV-2026-003',
    resident_id: 'res-003',
    devi_resident_id: 'DV5-1-00003',
    resident_name: 'Pooja Hegde',
    branch_code: 5,
    room_number: '101',
    billing_period_start: '2026-11-10',
    billing_period_end: '2026-12-09',
    rent_amount: 9000,
    additional_charges: 0,
    advance_adjusted: 0,
    total_payable: 9000,
    amount_paid: 9000,
    balance_due: 0,
    due_date: '2026-11-10',
    status: 'paid',
    created_at: '2026-11-10T08:00:00Z',
  },
  {
    id: 'inv-104',
    invoice_number: 'INV-2026-004',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    resident_name: 'Aditya Sai Krishna',
    branch_code: 1,
    room_number: '102',
    billing_period_start: '2026-12-01',
    billing_period_end: '2026-12-31',
    rent_amount: 7000,
    additional_charges: 0,
    advance_adjusted: 1500,
    total_payable: 7000,
    amount_paid: 0,
    balance_due: 5500,
    due_date: '2026-12-01',
    status: 'unpaid',
    created_at: '2026-11-20T08:00:00Z',
  }
];

let paymentsStore: FinancialPayment[] = [
  {
    id: 'pay-101',
    receipt_number: 'RCPT-2026-001',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    resident_name: 'Aditya Sai Krishna',
    branch_code: 1,
    room_number: '102',
    amount: 7000,
    payment_method: 'online_upi',
    payment_date: '2026-11-01',
    transaction_reference: 'UPI/632145698741/HDFC',
    status: 'verified',
    collector_name: 'Razorpay Auto-Settlement',
    invoice_number: 'INV-2026-001',
    created_at: '2026-11-01T10:00:00Z',
  },
  {
    id: 'pay-102',
    receipt_number: 'RCPT-2026-002',
    resident_id: 'res-002',
    devi_resident_id: 'DV2-2-00002',
    resident_name: 'Sumanth Nair',
    branch_code: 2,
    room_number: '201',
    amount: 8500,
    payment_method: 'direct_upi',
    payment_date: '2026-11-15',
    transaction_reference: 'UPI/998844332211/SBI',
    status: 'verified',
    collector_name: 'Marpina Pradeep (Proprietor)',
    invoice_number: 'INV-2026-002',
    created_at: '2026-11-15T11:00:00Z',
  },
  {
    id: 'pay-103',
    receipt_number: 'RCPT-2026-003',
    resident_id: 'res-003',
    devi_resident_id: 'DV5-1-00003',
    resident_name: 'Pooja Hegde',
    branch_code: 5,
    room_number: '101',
    amount: 9000,
    payment_method: 'online_upi',
    payment_date: '2026-11-10',
    transaction_reference: 'UPI/120934875612/ICICI',
    status: 'verified',
    collector_name: 'Razorpay Auto-Settlement',
    invoice_number: 'INV-2026-003',
    created_at: '2026-11-10T14:00:00Z',
  }
];

let advanceLedgerStore: AdvanceEntry[] = [
  {
    id: 'adv-001',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    resident_name: 'Aditya Sai Krishna',
    type: 'credit',
    amount: 3000,
    balance_after: 3000,
    description: 'Initial advance rent deposit paid at admission',
    date: '2026-11-01',
  },
  {
    id: 'adv-002',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    resident_name: 'Aditya Sai Krishna',
    type: 'debit_invoice',
    amount: 1500,
    balance_after: 1500,
    reference_invoice_id: 'inv-104',
    description: 'Partial advance utilized toward Invoice INV-2026-004',
    date: '2026-11-20',
  }
];

let depositLedgerStore: DepositEntry[] = [
  {
    id: 'dep-001',
    resident_id: 'res-001',
    devi_resident_id: 'DV1-1-00001',
    resident_name: 'Aditya Sai Krishna',
    type: 'deposit_received',
    amount: 10000,
    balance_after: 10000,
    remarks: 'Refundable security deposit received at admission. Escrow held.',
    date: '2026-11-01',
  },
  {
    id: 'dep-002',
    resident_id: 'res-002',
    devi_resident_id: 'DV2-2-00002',
    resident_name: 'Sumanth Nair',
    type: 'deposit_received',
    amount: 12000,
    balance_after: 12000,
    remarks: 'Refundable security deposit received at admission.',
    date: '2026-11-15',
  },
  {
    id: 'dep-003',
    resident_id: 'res-003',
    devi_resident_id: 'DV5-1-00003',
    resident_name: 'Pooja Hegde',
    type: 'deposit_received',
    amount: 15000,
    balance_after: 15000,
    remarks: 'Refundable security deposit received at admission.',
    date: '2026-11-10',
  }
];

function formatDateParts(y: number, m: number, d: number): string {
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

// Helper: Calculate individual joining-date billing period with month-end safety
export function calculateNextBillingPeriod(
  admissionDateStr: string,
  targetMonthOffset: number = 0
): { start: string; end: string; dueDate: string; period_start: string; period_end: string } {
  const parts = admissionDateStr.split('-');
  const origYear = parseInt(parts[0], 10);
  const origMonth = parseInt(parts[1], 10); // 1-12
  const anchorDay = parseInt(parts[2], 10);

  // Month arithmetic
  const totalMonths = (origMonth - 1) + targetMonthOffset;
  const targetYear = origYear + Math.floor(totalMonths / 12);
  const targetMonthIndex = ((totalMonths % 12) + 12) % 12; // 0-11
  const targetMonth = targetMonthIndex + 1; // 1-12

  // Month-end safety for start date
  const maxDaysThisMonth = new Date(targetYear, targetMonth, 0).getDate();
  const validStartDay = Math.min(anchorDay, maxDaysThisMonth);
  const startStr = formatDateParts(targetYear, targetMonth, validStartDay);

  // Next cycle start date
  const nextTotalMonths = totalMonths + 1;
  const nextYear = origYear + Math.floor(nextTotalMonths / 12);
  const nextMonthIndex = ((nextTotalMonths % 12) + 12) % 12;
  const nextMonth = nextMonthIndex + 1;
  const maxDaysNextMonth = new Date(nextYear, nextMonth, 0).getDate();
  const validNextStartDay = Math.min(anchorDay, maxDaysNextMonth);

  // End date is 1 day before the next cycle start
  const nextCycleDate = new Date(nextYear, nextMonthIndex, validNextStartDay);
  nextCycleDate.setDate(nextCycleDate.getDate() - 1);
  const endYear = nextCycleDate.getFullYear();
  const endMonth = nextCycleDate.getMonth() + 1;
  const endDay = nextCycleDate.getDate();
  const endStr = formatDateParts(endYear, endMonth, endDay);

  return {
    start: startStr,
    end: endStr,
    period_start: startStr,
    period_end: endStr,
    dueDate: startStr,
  };
}

// ----------------- Core Financial Functions -----------------

// Generate monthly recurring invoice for a resident
export function generateResidentInvoice(
  residentId: string,
  optionsOrCharges: number | { additional_charges?: number; notes?: string; apply_advance?: boolean } = 0,
  notesArg?: string
): { success: boolean; error?: string; invoice?: FinancialInvoice } {
  const resident = getResidentById(residentId);
  if (!resident) {
    return { success: false, error: 'Resident not found.' };
  }

  const additionalCharges = typeof optionsOrCharges === 'number'
    ? optionsOrCharges
    : optionsOrCharges.additional_charges || 0;
  const notes = typeof optionsOrCharges === 'object' && optionsOrCharges.notes
    ? optionsOrCharges.notes
    : notesArg;

  // Count existing invoices for this resident to determine next period offset
  const residentInvoices = invoicesStore.filter((i) => i.resident_id === resident.id);
  const period = calculateNextBillingPeriod(resident.admission_date, residentInvoices.length);

  // Check if invoice for this period already exists
  const exists = residentInvoices.some((i) => i.billing_period_start === period.start);
  if (exists) {
    return {
      success: false,
      error: `An invoice for period starting ${period.start} already exists for resident ${resident.resident_id}. Duplicate prevented.`,
    };
  }

  const rent = resident.agreed_monthly_rent;
  const total = rent + additionalCharges;

  // Auto-apply advance balance if available
  let advanceAdjusted = 0;
  if (resident.advance_balance > 0) {
    advanceAdjusted = Math.min(resident.advance_balance, total);
    resident.advance_balance -= advanceAdjusted;

    advanceLedgerStore.unshift({
      id: `adv-${Date.now()}`,
      resident_id: resident.id,
      devi_resident_id: resident.resident_id,
      resident_name: resident.full_name,
      type: 'debit_invoice',
      amount: advanceAdjusted,
      balance_after: resident.advance_balance,
      description: `Advance automatically utilized for recurring invoice`,
      date: new Date().toISOString().split('T')[0],
    });
  }

  const balanceDue = total - advanceAdjusted;
  const invoiceNumber = `INV-${new Date().getFullYear()}-${String(invoicesStore.length + 1).padStart(3, '0')}`;

  const newInvoice: FinancialInvoice = {
    id: `inv-${Date.now()}`,
    invoice_number: invoiceNumber,
    resident_id: resident.id,
    devi_resident_id: resident.resident_id,
    resident_name: resident.full_name,
    branch_code: resident.current_branch_code,
    room_number: resident.current_room_number,
    billing_period_start: period.start,
    billing_period_end: period.end,
    rent_amount: rent,
    additional_charges: additionalCharges,
    advance_adjusted: advanceAdjusted,
    total_payable: total,
    amount_paid: 0,
    balance_due: balanceDue,
    due_date: period.dueDate,
    status: balanceDue === 0 ? 'paid' : 'unpaid',
    notes,
    created_at: new Date().toISOString(),
  };

  invoicesStore.unshift(newInvoice);
  resident.outstanding_balance += balanceDue;

  return { success: true, invoice: newInvoice };
}

// Process Payment (Online or Offline Cash / Direct UPI)
export interface ProcessPaymentInput {
  resident_id: string;
  amount: number;
  payment_method: 'online_razorpay' | 'online_cashfree' | 'online_upi' | 'direct_upi' | 'cash' | 'bank_transfer';
  transaction_reference?: string;
  collector_name: string;
  collector_id?: string;
  verification_status?: 'verified' | 'pending';
  invoice_id?: string;
  remarks?: string;
}

export function recordPayment(input: ProcessPaymentInput): {
  success: boolean;
  error?: string;
  payment?: FinancialPayment;
} {
  const resident = getResidentById(input.resident_id);
  if (!resident) {
    return { success: false, error: 'Resident not found.' };
  }

  if (input.amount <= 0) {
    return { success: false, error: 'Payment amount must be greater than zero.' };
  }

  const receiptNumber = `RCPT-${new Date().getFullYear()}-${String(paymentsStore.length + 1).padStart(3, '0')}`;
  const paymentDate = new Date().toISOString().split('T')[0];
  const ref = input.transaction_reference || `TXN-${Date.now()}`;

  let remainingPayment = input.amount;

  // Allocate payment to unpaid/partially paid invoices
  const residentInvoices = invoicesStore
    .filter((i) => i.resident_id === resident.id && i.status !== 'paid' && i.status !== 'cancelled')
    .sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime());

  if (input.invoice_id) {
    const specificInv = invoicesStore.find((i) => i.id === input.invoice_id);
    if (specificInv && specificInv.balance_due > 0) {
      const settleAmount = Math.min(remainingPayment, specificInv.balance_due);
      specificInv.amount_paid += settleAmount;
      specificInv.balance_due -= settleAmount;
      if (specificInv.balance_due === 0) specificInv.status = 'paid';
      else specificInv.status = 'partially_paid';

      remainingPayment -= settleAmount;
      resident.outstanding_balance = Math.max(0, resident.outstanding_balance - settleAmount);
    }
  } else {
    // Cascade to oldest unpaid invoices
    for (const inv of residentInvoices) {
      if (remainingPayment <= 0) break;
      const settleAmount = Math.min(remainingPayment, inv.balance_due);
      inv.amount_paid += settleAmount;
      inv.balance_due -= settleAmount;
      if (inv.balance_due === 0) inv.status = 'paid';
      else inv.status = 'partially_paid';

      remainingPayment -= settleAmount;
      resident.outstanding_balance = Math.max(0, resident.outstanding_balance - settleAmount);
    }
  }

  // Any excess payment automatically flows to resident's Advance Rent Credit ledger!
  if (remainingPayment > 0) {
    resident.advance_balance += remainingPayment;
    advanceLedgerStore.unshift({
      id: `adv-${Date.now()}`,
      resident_id: resident.id,
      devi_resident_id: resident.resident_id,
      resident_name: resident.full_name,
      type: 'credit',
      amount: remainingPayment,
      balance_after: resident.advance_balance,
      description: `Excess payment credited to advance rent from Receipt ${receiptNumber}`,
      date: paymentDate,
    });
  }

  const newPayment: FinancialPayment = {
    id: `pay-${Date.now()}`,
    receipt_number: receiptNumber,
    resident_id: resident.id,
    devi_resident_id: resident.resident_id,
    resident_name: resident.full_name,
    branch_code: resident.current_branch_code,
    room_number: resident.current_room_number,
    amount: input.amount,
    payment_method: input.payment_method as any,
    payment_date: paymentDate,
    transaction_reference: ref,
    status: input.verification_status || 'verified',
    collector_name: input.collector_name,
    collector_id: input.collector_id,
    remarks: input.remarks,
    invoice_number: residentInvoices[0]?.invoice_number || 'ADVANCE-DIRECT',
    created_at: new Date().toISOString(),
  };

  paymentsStore.unshift(newPayment);

  return { success: true, payment: newPayment };
}

// Payment Reversal / Adjustment (Never delete financial records)
export function reversePayment(
  paymentId: string,
  reversalReason: string,
  actorName: string
): { success: boolean; error?: string; reversalPayment?: FinancialPayment } {
  const originalPayment = paymentsStore.find((p) => p.id === paymentId);
  if (!originalPayment) {
    return { success: false, error: 'Original payment record not found.' };
  }
  if (originalPayment.is_reversed) {
    return { success: false, error: 'This payment has already been reversed.' };
  }

  const resident = getResidentById(originalPayment.resident_id);
  if (!resident) {
    return { success: false, error: 'Resident not found.' };
  }

  originalPayment.is_reversed = true;

  // Re-instate outstanding balance
  resident.outstanding_balance += originalPayment.amount;

  const reversalReceipt = `REV-${new Date().getFullYear()}-${String(paymentsStore.length + 1).padStart(3, '0')}`;
  const reversalPayment: FinancialPayment = {
    id: `rev-${Date.now()}`,
    receipt_number: reversalReceipt,
    resident_id: resident.id,
    devi_resident_id: resident.resident_id,
    resident_name: resident.full_name,
    branch_code: originalPayment.branch_code,
    room_number: originalPayment.room_number,
    amount: -originalPayment.amount,
    payment_method: originalPayment.payment_method,
    payment_date: new Date().toISOString().split('T')[0],
    transaction_reference: `REVERSAL-FOR-${originalPayment.receipt_number}`,
    status: 'verified',
    collector_name: actorName,
    remarks: `Reversal of Receipt ${originalPayment.receipt_number}. Reason: ${reversalReason}`,
    reversal_of_id: originalPayment.id,
    created_at: new Date().toISOString(),
  };

  paymentsStore.unshift(reversalPayment);

  return { success: true, reversalPayment };
}

// Security Deposit Deduction or Refund
export function recordDepositTransaction(
  residentIdOrInput: string | { resident_id: string; type: 'damage_deduction' | 'utility_deduction' | 'refund'; amount: number; remarks: string },
  typeArg?: 'damage_deduction' | 'utility_deduction' | 'refund',
  amountArg?: number,
  remarksArg?: string
): { success: boolean; error?: string; entry?: DepositEntry } {
  const residentId = typeof residentIdOrInput === 'string' ? residentIdOrInput : residentIdOrInput.resident_id;
  const type = typeof residentIdOrInput === 'object' ? residentIdOrInput.type : typeArg!;
  const amount = typeof residentIdOrInput === 'object' ? residentIdOrInput.amount : amountArg!;
  const remarks = typeof residentIdOrInput === 'object' ? residentIdOrInput.remarks : remarksArg || '';

  const resident = getResidentById(residentId);
  if (!resident) {
    return { success: false, error: 'Resident not found.' };
  }

  if (amount <= 0) {
    return { success: false, error: 'Amount must be greater than zero.' };
  }

  if (amount > resident.security_deposit) {
    return {
      success: false,
      error: `Transaction amount (₹${amount}) exceeds available deposit balance (₹${resident.security_deposit}).`,
    };
  }

  resident.security_deposit -= amount;

  const newEntry: DepositEntry = {
    id: `dep-${Date.now()}`,
    resident_id: resident.id,
    devi_resident_id: resident.resident_id,
    resident_name: resident.full_name,
    type,
    amount,
    balance_after: resident.security_deposit,
    remarks,
    date: new Date().toISOString().split('T')[0],
  };

  depositLedgerStore.unshift(newEntry);
  return { success: true, entry: newEntry };
}

// ----------------- Getters & Aggregations -----------------

export function getInvoices(filters?: {
  branchCode?: number;
  residentId?: string;
  status?: string;
}): FinancialInvoice[] {
  let result = invoicesStore;
  if (filters?.branchCode) {
    result = result.filter((i) => i.branch_code === filters.branchCode);
  }
  if (filters?.residentId) {
    result = result.filter(
      (i) => i.resident_id === filters.residentId || i.devi_resident_id === filters.residentId
    );
  }
  if (filters?.status && filters.status !== 'all') {
    result = result.filter((i) => i.status === filters.status);
  }
  return result;
}

export function getPayments(filters?: {
  branchCode?: number;
  residentId?: string;
  method?: string;
  status?: string;
}): FinancialPayment[] {
  let result = paymentsStore;
  if (filters?.branchCode) {
    result = result.filter((p) => p.branch_code === filters.branchCode);
  }
  if (filters?.residentId) {
    result = result.filter(
      (p) => p.resident_id === filters.residentId || p.devi_resident_id === filters.residentId
    );
  }
  if (filters?.method && filters.method !== 'all') {
    result = result.filter((p) => p.payment_method === filters.method);
  }
  if (filters?.status && filters.status !== 'all') {
    result = result.filter((p) => p.status === filters.status);
  }
  return result;
}

export function getAdvanceLedger(residentId?: string): AdvanceEntry[] {
  if (residentId) {
    return advanceLedgerStore.filter(
      (a) => a.resident_id === residentId || a.devi_resident_id === residentId
    );
  }
  return advanceLedgerStore;
}

export function getDepositLedger(residentId?: string): DepositEntry[] {
  if (residentId) {
    return depositLedgerStore.filter(
      (d) => d.resident_id === residentId || d.devi_resident_id === residentId
    );
  }
  return depositLedgerStore;
}

// Financial Analytics Dashboard Metrics
export interface FinancialOverviewSummary {
  total_invoiced: number;
  total_collected: number;
  total_outstanding_dues: number;
  total_advance_held: number;
  total_security_deposits: number;
  collections_by_method: {
    online_upi: number;
    direct_upi: number;
    cash: number;
    bank_transfer: number;
  };
  payment_method_breakdown?: {
    online_upi: number;
    direct_upi: number;
    cash: number;
    bank_transfer: number;
  };
  branch_summaries: {
    branch_code: 1 | 2 | 3 | 4 | 5;
    branch_name: string;
    invoiced: number;
    collected: number;
    outstanding: number;
  }[];
}

export function getFinancialOverview(): FinancialOverviewSummary {
  const activeInvoices = invoicesStore.filter((i) => i.status !== 'cancelled');
  const verifiedPayments = paymentsStore.filter((p) => p.status === 'verified' && !p.is_reversed);

  const totalInvoiced = activeInvoices.reduce((acc, i) => acc + i.total_payable, 0);
  const totalCollected = verifiedPayments.reduce((acc, p) => acc + p.amount, 0);
  const totalOutstanding = activeInvoices.reduce((acc, i) => acc + i.balance_due, 0);

  const residents = getResidents();
  const totalAdvance = residents.reduce((acc, r) => acc + (r.advance_balance || 0), 0);
  const totalDeposits = residents.reduce((acc, r) => acc + (r.security_deposit || 0), 0);

  const methodBreakdown = {
    online_upi: verifiedPayments
      .filter((p) => p.payment_method === 'online_upi' || p.payment_method === 'online_razorpay')
      .reduce((acc, p) => acc + p.amount, 0),
    direct_upi: verifiedPayments
      .filter((p) => p.payment_method === 'direct_upi')
      .reduce((acc, p) => acc + p.amount, 0),
    cash: verifiedPayments
      .filter((p) => p.payment_method === 'cash')
      .reduce((acc, p) => acc + p.amount, 0),
    bank_transfer: verifiedPayments
      .filter((p) => p.payment_method === 'bank_transfer')
      .reduce((acc, p) => acc + p.amount, 0),
  };

  const branchSummaries = DEVI_BRANCHES.map((b) => {
    const bInvoices = activeInvoices.filter((i) => i.branch_code === b.branch_code);
    const bPayments = verifiedPayments.filter((p) => p.branch_code === b.branch_code);

    return {
      branch_code: b.branch_code,
      branch_name: b.name,
      invoiced: bInvoices.reduce((acc, i) => acc + i.total_payable, 0),
      collected: bPayments.reduce((acc, p) => acc + p.amount, 0),
      outstanding: bInvoices.reduce((acc, i) => acc + i.balance_due, 0),
    };
  });

  return {
    total_invoiced: totalInvoiced,
    total_collected: totalCollected,
    total_outstanding_dues: totalOutstanding,
    total_advance_held: totalAdvance,
    total_security_deposits: totalDeposits,
    collections_by_method: methodBreakdown,
    payment_method_breakdown: methodBreakdown,
    branch_summaries: branchSummaries,
  };
}
