import { UserRole } from '@/types/database';
import { hashPassword } from '@/lib/auth/password';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export interface StaffMember {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  role: 'owner' | 'branch_manager' | 'accountant' | 'warden';
  assigned_branch_codes: number[]; // e.g. [1, 2, 3, 4, 5] for owner/accountant, [1] for branch 1 manager
  status: 'active' | 'inactive';
  password_hash?: string;
  created_at: string;
}

// Initial verified staff store with PBKDF2 cryptographic hashes
let staffStore: StaffMember[] = [
  {
    id: 'staff-001',
    full_name: 'MARPINA PRADEEP',
    email: 'pradeep@devihostels.com',
    phone: '+91 94940 12345',
    role: 'owner',
    assigned_branch_codes: [1, 2, 3, 4, 5],
    status: 'active',
    password_hash: hashPassword('DeviHostels@Pradeep2026!'),
    created_at: '2026-01-01',
  },
  {
    id: 'staff-002',
    full_name: 'V. Ramesh Babu',
    email: 'ramesh.branch1@devihostels.com',
    phone: '+91 94940 23456',
    role: 'branch_manager',
    assigned_branch_codes: [1],
    status: 'active',
    password_hash: hashPassword('DeviRamesh@Branch1!'),
    created_at: '2026-01-15',
  },
  {
    id: 'staff-003',
    full_name: 'K. Sridhar Rao',
    email: 'accounts@devihostels.com',
    phone: '+91 94940 34567',
    role: 'accountant',
    assigned_branch_codes: [1, 2, 3, 4, 5],
    status: 'active',
    password_hash: hashPassword('DeviAccounts@Sridhar2026!'),
    created_at: '2026-02-01',
  },
  {
    id: 'staff-004',
    full_name: 'P. Sunitha Reddy',
    email: 'sunitha.warden@devihostels.com',
    phone: '+91 94940 45678',
    role: 'warden',
    assigned_branch_codes: [5], // Girls Hostel Branch 1
    status: 'active',
    password_hash: hashPassword('DeviGirls@Warden2026!'),
    created_at: '2026-02-10',
  },
  {
    id: 'staff-005',
    full_name: 'M. Anand Kumar',
    email: 'anand.branch2@devihostels.com',
    phone: '+91 94940 56789',
    role: 'branch_manager',
    assigned_branch_codes: [2],
    status: 'active',
    password_hash: hashPassword('DeviAnand@Branch2!'),
    created_at: '2026-03-01',
  },
];

export function getStaffMembers(filter?: {
  role?: string;
  branchCode?: number;
  status?: string;
}): StaffMember[] {
  let list = [...staffStore];
  if (filter?.role) {
    list = list.filter((s) => s.role === filter.role);
  }
  if (filter?.branchCode) {
    list = list.filter((s) => s.assigned_branch_codes.includes(filter.branchCode!));
  }
  if (filter?.status) {
    list = list.filter((s) => s.status === filter.status);
  }
  return list;
}

export function getStaffById(id: string): StaffMember | undefined {
  return staffStore.find((s) => s.id === id);
}

export function createStaffMember(input: {
  full_name: string;
  email: string;
  phone: string;
  role: 'owner' | 'branch_manager' | 'accountant' | 'warden';
  assigned_branch_codes: number[];
  initial_password?: string;
}): { success: boolean; staff?: StaffMember; error?: string } {
  if (!input.full_name || !input.email || !input.phone || !input.role) {
    return { success: false, error: 'Full name, email, phone, and role are required.' };
  }

  const newStaff: StaffMember = {
    id: `staff-${Date.now()}`,
    full_name: input.full_name,
    email: input.email,
    phone: input.phone,
    role: input.role,
    assigned_branch_codes: input.assigned_branch_codes || [1],
    status: 'active',
    password_hash: hashPassword(input.initial_password || `DeviStaff@${Date.now()}!`),
    created_at: new Date().toISOString().split('T')[0],
  };

  staffStore.push(newStaff);
  return { success: true, staff: newStaff };
}

export function updateStaffStatus(
  id: string,
  status: 'active' | 'inactive'
): { success: boolean; staff?: StaffMember; error?: string } {
  const staff = staffStore.find((s) => s.id === id);
  if (!staff) {
    return { success: false, error: 'Staff member not found.' };
  }
  staff.status = status;
  return { success: true, staff };
}
