import { NextRequest, NextResponse } from 'next/server';
import { getInvoices, generateResidentInvoice } from '@/lib/data/financials-repo';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const branchCode = searchParams.get('branch_code');
    const residentId = searchParams.get('resident_id');
    const status = searchParams.get('status');

    const invoices = getInvoices({
      branchCode: branchCode ? parseInt(branchCode, 10) : undefined,
      residentId: residentId || undefined,
      status: status || undefined,
    });

    return NextResponse.json({ success: true, count: invoices.length, data: invoices });
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
    const { resident_id, additional_charges, notes } = body;

    if (!resident_id) {
      return NextResponse.json(
        { success: false, error: 'Resident ID is required to generate invoice.' },
        { status: 400 }
      );
    }

    const result = generateResidentInvoice(
      resident_id,
      additional_charges || 0,
      notes
    );

    if (!result.success || !result.invoice) {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to generate recurring invoice.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Invoice ${result.invoice.invoice_number} generated for period ${result.invoice.billing_period_start} to ${result.invoice.billing_period_end}.`,
        data: result.invoice,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
