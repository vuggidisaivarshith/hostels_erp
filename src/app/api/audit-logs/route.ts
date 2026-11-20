import { NextRequest, NextResponse } from 'next/server';
import { getAuditLogs } from '@/lib/data/financials-repo';

export async function GET() {
  try {
    const logs = getAuditLogs();
    return NextResponse.json({ success: true, count: logs.length, data: logs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
