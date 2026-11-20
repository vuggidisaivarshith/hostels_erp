import { NextRequest, NextResponse } from 'next/server';
import { getStaffMembers } from '@/lib/data/staff-repo';
import { checkRateLimit, resetRateLimit } from '@/lib/auth/rate-limit';
import { createSessionToken, SESSION_COOKIES } from '@/lib/auth/session';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Staff email and password are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Rate limit: Max 5 staff login attempts per email every 5 minutes
    const rateCheck = checkRateLimit(`staff_login:${cleanEmail}`, 5, 300);
    if (!rateCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many failed login attempts. Please wait ${rateCheck.resetInSeconds} seconds before trying again.`,
        },
        { status: 429 }
      );
    }

    // Locate staff member
    const allStaff = getStaffMembers();
    const staff = allStaff.find((s) => s.email.toLowerCase() === cleanEmail);

    if (!staff) {
      return NextResponse.json(
        { success: false, error: 'Invalid staff credentials or account not found.' },
        { status: 401 }
      );
    }

    if (staff.status !== 'active') {
      return NextResponse.json(
        { success: false, error: 'Staff account has been deactivated. Please contact Proprietor Marpina Pradeep.' },
        { status: 403 }
      );
    }

    // Standard credential check (in production, against bcrypt/Argon2 or Supabase Auth)
    const validPassword = password === 'admin123' || password === 'Pradeep@Devi2026';
    if (!validPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid staff password. Please verify your credentials.' },
        { status: 401 }
      );
    }

    resetRateLimit(`staff_login:${cleanEmail}`);

    // Generate signed tamper-proof 24-hour staff session token
    const exp = Math.floor(Date.now() / 1000) + 86400;
    const sessionToken = createSessionToken({
      type: 'staff',
      staffId: staff.id,
      name: staff.full_name,
      email: staff.email,
      role: staff.role,
      assignedBranchCodes: staff.assigned_branch_codes,
      exp,
    });

    const response = NextResponse.json({
      success: true,
      message: `Authenticated as ${staff.full_name} (${staff.role.replace('_', ' ').toUpperCase()})`,
      data: {
        id: staff.id,
        name: staff.full_name,
        email: staff.email,
        role: staff.role,
        assigned_branch_codes: staff.assigned_branch_codes,
      },
    });

    // Set secure HTTP-only signed session cookie
    response.cookies.set(SESSION_COOKIES.STAFF, sessionToken, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400,
    });

    // Client-readable convenience cookies for UI greetings
    response.cookies.set('devi_staff_name', encodeURIComponent(staff.full_name), {
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400,
    });
    response.cookies.set('devi_staff_role', staff.role, {
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
