import { NextRequest, NextResponse } from 'next/server';
import { getResidents } from '@/lib/data/residents-repo';
import { CustomerCategory } from '@/types/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const branchCode = searchParams.get('branch_code');
    const category = searchParams.get('category') as CustomerCategory | null;
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const residents = getResidents({
      branchCode: branchCode ? parseInt(branchCode, 10) : undefined,
      category: category || undefined,
      status: status || undefined,
      search: search || undefined,
    });

    return NextResponse.json({
      success: true,
      count: residents.length,
      data: residents,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
