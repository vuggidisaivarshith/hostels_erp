export type Gender = 'male' | 'female';
export type CustomerCategory = 'student' | 'airport_employee';
export type EnquiryStatus = 'new' | 'contacted' | 'visited' | 'approved' | 'rejected';
export type UserRole = 'owner' | 'branch_manager' | 'accountant' | 'warden' | 'resident';
export type RoomSharing = '1_sharing' | '2_sharing' | '3_sharing' | '4_sharing';

export interface Branch {
  id: string;
  branch_code: 1 | 2 | 3 | 4 | 5;
  name: string;
  gender_category: 'boys' | 'girls';
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  pincode: string;
  contact_phone: string;
  contact_email: string;
  total_floors: number;
  facilities: string[];
  images: string[];
  status: 'active' | 'inactive';
  description: string;
  key_highlights: string[];
  starting_price_per_month: number;
  distance_from_rgia: string;
}

export interface Enquiry {
  id?: string;
  category: CustomerCategory;
  full_name: string;
  phone: string;
  email?: string;
  gender: Gender;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_relation: string;
  preferred_branch_id: string;
  room_sharing_preference: RoomSharing;
  expected_joining_date: string;
  // Student
  student_college_name?: string;
  student_course?: string;
  student_year?: string;
  student_parent_phone?: string;
  // Airport Employee
  employee_company?: string;
  employee_designation?: string;
  employee_shift_timing?: string;
  employee_id_number?: string;
  // Status
  status: EnquiryStatus;
  internal_remarks?: string;
  converted_resident_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Floor {
  id: string;
  branch_id: string;
  floor_number: number;
  floor_name: string;
}

export interface Room {
  id: string;
  branch_id: string;
  floor_id: string;
  room_number: string;
  room_type: RoomSharing;
  has_ac: boolean;
  has_attached_bathroom: boolean;
  monthly_rate_per_bed: number;
}

export interface Bed {
  id: string;
  room_id: string;
  bed_number: string;
  status: 'vacant' | 'occupied' | 'reserved' | 'maintenance';
}
