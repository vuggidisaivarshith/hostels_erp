import { Branch } from '@/types/database';

export interface VerifiedBranch extends Branch {
  verified_address: boolean;
  owner_verification_status: 'verified' | 'pending_owner_pin';
  google_map_link?: string;
  landmark_notes?: string;
}

export const VERIFIED_CONTACTS = {
  business_name: 'DEVI HOSTELS',
  flagship_name: 'DEVI MANSION — Devi Luxury Boys Hostel (The Boys Town)',
  owner_proprietor: 'MARPINA PRADEEP',
  phones: ['+91 99898 97705', '+91 94940 12345'],
  primary_phone: '+91 99898 97705',
  secondary_phone: '+91 94940 12345',
  whatsapp_number: '919989897705',
  flagship_address: 'Street Number 8, Rallaguda Road, Madhura Nagar, Shamshabad, Hyderabad, Telangana — 501218',
  location_city: 'Shamshabad, Hyderabad, Telangana',
  google_knowledge_link: 'https://share.google/iCW7Zy3mRxZL94HtS',
  instagram_profile: 'https://www.instagram.com/devi_mansion_/',
  instagram_handle: '@devi_mansion_',
  google_rating: '4.8★ on Google (Devi Luxury Boys Hostel / Devi Mansion)',
};

export const DEVI_BRANCHES: VerifiedBranch[] = [
  {
    id: 'b1-boys-branch-1',
    branch_code: 1,
    name: 'DEVI MANSION — Devi Luxury Boys Hostel (The Boys Town)',
    gender_category: 'boys',
    address_line1: 'Street Number 8, Rallaguda Road, Madhura Nagar',
    address_line2: 'Shamshabad, Hyderabad (Near RGIA Airport Hub)',
    city: 'Shamshabad, Hyderabad',
    state: 'Telangana',
    pincode: '501218',
    contact_phone: '+91 99898 97705',
    contact_email: 'devimansion@devihostels.com',
    total_floors: 4,
    distance_from_rgia: '5-8 Mins Drive to RGIA Airport Terminal & Cargo Complex',
    starting_price_per_month: 6500,
    status: 'active',
    verified_address: true,
    owner_verification_status: 'verified',
    google_map_link: 'https://share.google/iCW7Zy3mRxZL94HtS',
    landmark_notes: 'Street Number 8, Rallaguda Road, Madhura Nagar — Flagship property',
    description: 'Newly constructed flagship luxury building (Devi Mansion / The Boys Town) on Street 8, Rallaguda Road. Features attached private bathrooms, free on-site fitness gym, dedicated vehicle parking, high-speed fiber Wi-Fi, and 3-times daily hygienic South & North Indian dining. Rated 4.8★ on Google.',
    key_highlights: [
      'Newly built luxury structure with spacious rooms & attached bathrooms',
      'Free in-house fitness gym and dedicated bike/car parking',
      'Prime location off Rallaguda Road, Madhura Nagar (4.8★ on Google)',
      '3-times daily fresh buffet meals + early morning airport shift food packs',
      'Official Instagram: @devi_mansion_'
    ],
    facilities: [
      'Free In-House Fitness Gym',
      'Dedicated Vehicle Parking (Bikes & Cars)',
      'Attached Bathrooms with 24/7 Hot Water Geysers',
      'High-Speed Unlimited Fiber Wi-Fi',
      '3-Times Homely Buffet Meals (South & North Indian)',
      '24/7 Biometric Entry & CCTV Security',
      'RO Purified Mineral Drinking Water on Every Floor',
      'Heavy Duty Power Backup & Washing Machines',
      'Individual Lockable Cupboards & Ergonomic Study Tables'
    ],
    images: [
      '/images/branches/branch1-main.jpg',
      '/images/branches/room-boys-1.jpg'
    ]
  },
  {
    id: 'b2-boys-branch-2',
    branch_code: 2,
    name: 'DEVI Hostels — Boys Hostel Branch 2',
    gender_category: 'boys',
    address_line1: 'Airport Staff Enclave, Shamshabad',
    address_line2: 'Contact management for exact location pin & site visit',
    city: 'Shamshabad, Hyderabad',
    state: 'Telangana',
    pincode: '501218',
    contact_phone: '+91 99898 97705',
    contact_email: 'branch2@devihostels.com',
    total_floors: 4,
    distance_from_rgia: 'Convenient transit to RGIA Passenger & Cargo Gates',
    starting_price_per_month: 7000,
    status: 'active',
    verified_address: false,
    owner_verification_status: 'pending_owner_pin',
    landmark_notes: 'Shamshabad Airport Zone — Contact management for exact navigation directions',
    description: 'Configured for aviation professionals, ground handling staff, and airline shift crew with quiet-hours policy, flexible meal timings, and dependable power backup.',
    key_highlights: [
      'Dedicated to RGIA Airport and shift-based professionals',
      'Rotational shift friendly with 24/7 entry assistance & quiet hours',
      'Air-conditioned and non-AC room configurations',
      'On-site laundry and commercial washing machines'
    ],
    facilities: [
      'High-Speed Unlimited Wi-Fi',
      'Shift-Friendly Warm Food & Early Breakfast Counter',
      '24/7 Biometric Entry & CCTV Coverage',
      'Continuous Hot Water Geysers',
      'Daily Housekeeping with Linen Wash',
      'Pure RO Drinking Water Dispensers',
      'Power Backup System',
      'Automatic Washing Machines'
    ],
    images: [
      '/images/branches/branch2-main.jpg',
      '/images/branches/room-boys-2.jpg'
    ]
  },
  {
    id: 'b3-boys-branch-3',
    branch_code: 3,
    name: 'DEVI Hostels — Boys Hostel Branch 3',
    gender_category: 'boys',
    address_line1: 'Rallaguda Zone, Shamshabad',
    address_line2: 'Contact management for exact location pin & site visit',
    city: 'Shamshabad, Hyderabad',
    state: 'Telangana',
    pincode: '501218',
    contact_phone: '+91 99898 97705',
    contact_email: 'branch3@devihostels.com',
    total_floors: 4,
    distance_from_rgia: 'Quick transit to Shamshabad colleges & bus connectivity',
    starting_price_per_month: 6000,
    status: 'active',
    verified_address: false,
    owner_verification_status: 'pending_owner_pin',
    landmark_notes: 'Shamshabad Collegiate Corridor — Contact management for exact navigation directions',
    description: 'Academic-centric campus hostel tailored for students pursuing engineering, aviation, and degree studies in Shamshabad. Focuses on an orderly study atmosphere and hygienic food.',
    key_highlights: [
      'Close to educational academies and student bus routes in Shamshabad',
      'Quiet study desks, high-speed fiber internet and group study areas',
      'Wholesome 3-times daily dining with fresh milk and breakfast'
    ],
    facilities: [
      'High-Speed Unlimited Wi-Fi (100 Mbps+)',
      'Student-Focused Hygienic 3-Times Daily Meals',
      '24/7 CCTV & Resident Warden on Duty',
      'Hot Water Bathrooms with Daily Sanitation',
      'Daily Room Housekeeping',
      'RO Drinking Water Purifiers',
      'Power Backup System',
      'Washing Machines'
    ],
    images: [
      '/images/branches/branch3-main.jpg',
      '/images/branches/room-boys-3.jpg'
    ]
  },
  {
    id: 'b4-boys-branch-4',
    branch_code: 4,
    name: 'DEVI Hostels — Boys Hostel Branch 4',
    gender_category: 'boys',
    address_line1: 'Madhura Nagar Area, Shamshabad',
    address_line2: 'Contact management for exact location pin & site visit',
    city: 'Shamshabad, Hyderabad',
    state: 'Telangana',
    pincode: '501218',
    contact_phone: '+91 99898 97705',
    contact_email: 'branch4@devihostels.com',
    total_floors: 4,
    distance_from_rgia: 'Minutes away from Shamshabad Town Center & RGIA transit',
    starting_price_per_month: 6500,
    status: 'active',
    verified_address: false,
    owner_verification_status: 'pending_owner_pin',
    landmark_notes: 'Madhura Nagar Residential Pocket — Contact management for exact navigation directions',
    description: 'Executive boys hostel offering spacious rooms, ample ventilation, and serene residential surroundings. Well suited for working professionals and senior students.',
    key_highlights: [
      'Calm residential neighborhood with good ventilation',
      'Spacious room layouts with attached washrooms',
      'Home-style buffet meals prepared fresh daily',
      'Covered two-wheeler parking'
    ],
    facilities: [
      'High-Speed Wi-Fi Network',
      '3-Times Fresh Meals & Evening Tea',
      '24/7 Security & CCTV Surveillance',
      'Hot Water Geysers in Washrooms',
      'Daily Housekeeping Service',
      'RO Purified Water Dispensers',
      'Inverter Power Backup',
      'Washing Machines'
    ],
    images: [
      '/images/branches/branch4-main.jpg',
      '/images/branches/room-boys-4.jpg'
    ]
  },
  {
    id: 'b5-girls-branch-1',
    branch_code: 5,
    name: 'DEVI Hostels — Girls Hostel Branch 1',
    gender_category: 'girls',
    address_line1: 'Secured Residential Enclave, Shamshabad',
    address_line2: 'Contact management for exact location pin & parent visits',
    city: 'Shamshabad, Hyderabad',
    state: 'Telangana',
    pincode: '501218',
    contact_phone: '+91 99898 97705',
    contact_email: 'girlsbranch1@devihostels.com',
    total_floors: 5,
    distance_from_rgia: 'Safe transit connectivity to RGIA Airport and Shamshabad colleges',
    starting_price_per_month: 7500,
    status: 'active',
    verified_address: false,
    owner_verification_status: 'pending_owner_pin',
    landmark_notes: 'Shamshabad Girls Enclave — Lady warden on duty; contact management for visit verification',
    description: 'High-security, fully monitored accommodation crafted for female college students, cabin crew, female airport ground staff, and working women. Features resident lady wardens, biometric access, and 24/7 CCTV surveillance.',
    key_highlights: [
      'Multi-tier security: Biometric access, resident female warden, 24/7 CCTV',
      'Dedicated female accommodation with strict visitor entry protocols',
      'Wholesome, home-cooked hygienic South & North Indian food'
    ],
    facilities: [
      'High-Speed Unlimited Fiber Wi-Fi',
      '3-Times Nutritious Food & Evening Tea',
      'Biometric Access & 24/7 CCTV Monitoring',
      '24/7 Hot Water Geysers in Attached Washrooms',
      'Daily Housekeeping & Disinfection',
      'Multi-Stage RO Water Purifiers',
      'Generator Power Backup',
      'Washing Machines'
    ],
    images: [
      '/images/branches/branch5-main.jpg',
      '/images/branches/room-girls-1.jpg'
    ]
  }
];

export function getBranchByCode(code: number): VerifiedBranch | undefined {
  return DEVI_BRANCHES.find(b => b.branch_code === code);
}

export function getBranchById(id: string): VerifiedBranch | undefined {
  return DEVI_BRANCHES.find(b => b.id === id || b.branch_code.toString() === id);
}
