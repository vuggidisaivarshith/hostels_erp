import { NextRequest, NextResponse } from 'next/server';
import { getStaffMembers, createStaffMember, updateStaffStatus } from '@/lib/data/staff-repo';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role') || undefined;
    const branchCode = searchParams.get('branch_code')
      ? parseInt(searchParams.get('branch_code')!, 10)
      : undefined;
    const status = searchParams.get('status') || undefined;

    const list = getStaffMembers({ role, branchCode, status });
    return NextResponse.json({ success: true, count: list.length, data: list });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = createStaffMember(body);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }
    return NextResponse.json({ success: true, staff: result.staff }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;
    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: 'Staff ID and status are required.' },
        { status: 400 }
      );
    }
    const result = updateStaffStatus(id, status);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }
    return NextResponse.json({ success: true, message: `Staff status updated to ${status}.` });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
