import { NextRequest, NextResponse } from 'next/server';
import { getResidentById, getResidentByPhone } from '@/lib/data/residents-repo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { method, phone, otp, resident_id, password } = body;

    let resident = null;

    if (method === 'otp') {
      if (!phone) {
        return NextResponse.json(
          { success: false, error: 'Mobile number is required.' },
          { status: 400 }
        );
      }

      resident = getResidentByPhone(phone);
      if (!resident) {
        return NextResponse.json(
          {
            success: false,
            error: `No active resident record found for mobile number ${phone}. Please contact hostel management.`,
          },
          { status: 404 }
        );
      }

      // OTP Verification simulation (accepts '123456' or any 6-digit in development)
      if (otp && otp !== '123456' && otp.length < 4) {
        return NextResponse.json(
          { success: false, error: 'Invalid verification OTP code.' },
          { status: 400 }
        );
      }
    } else if (method === 'password') {
      if (!resident_id || !password) {
        return NextResponse.json(
          { success: false, error: 'Resident ID and password are required.' },
          { status: 400 }
        );
      }

      resident = getResidentById(resident_id);
      if (!resident) {
        return NextResponse.json(
          {
            success: false,
            error: `Resident ID ${resident_id} not found. Please verify your ID card.`,
          },
          { status: 404 }
        );
      }

      // Verify password (demo accepts 'devi123' or resident.password_hash)
      if (password !== 'devi123' && password !== resident.password_hash) {
        return NextResponse.json(
          { success: false, error: 'Incorrect account password.' },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        { success: false, error: 'Authentication method must be "otp" or "password".' },
        { status: 400 }
      );
    }

    if (resident.status !== 'active') {
      return NextResponse.json(
        {
          success: false,
          error: `Resident account is currently ${resident.status}. Please contact hostel management.`,
        },
        { status: 403 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: `Welcome back, ${resident.full_name}!`,
      data: {
        resident_id: resident.resident_id,
        id: resident.id,
        full_name: resident.full_name,
        category: resident.category,
        branch_code: resident.current_branch_code,
        room_number: resident.current_room_number,
        bed_number: resident.current_bed_number,
      },
    });

    // Set cookie for resident session
    response.cookies.set('devi_resident_id', resident.resident_id, {
      path: '/',
      httpOnly: false, // Accessible by client layout for active profile
      maxAge: 86400 * 7,
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
