import { NextRequest, NextResponse } from 'next/server';
import { getPayments, recordPayment } from '@/lib/data/financials-repo';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const branchCode = searchParams.get('branch_code');
    const residentId = searchParams.get('resident_id');
    const method = searchParams.get('method');
    const status = searchParams.get('status');

    const payments = getPayments({
      branchCode: branchCode ? parseInt(branchCode, 10) : undefined,
      residentId: residentId || undefined,
      method: method || undefined,
      status: status || undefined,
    });

    return NextResponse.json({ success: true, count: payments.length, data: payments });
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
    const {
      resident_id,
      amount,
      payment_method,
      transaction_reference,
      collector_name,
      collector_id,
      verification_status,
      invoice_id,
      remarks,
    } = body;

    if (!resident_id || !amount || !payment_method || !collector_name) {
      return NextResponse.json(
        { success: false, error: 'Resident ID, amount, payment method, and collector name are required.' },
        { status: 400 }
      );
    }

    const result = recordPayment({
      resident_id,
      amount: parseFloat(amount),
      payment_method,
      transaction_reference,
      collector_name,
      collector_id,
      verification_status: verification_status || 'verified',
      invoice_id,
      remarks,
    });

    if (!result.success || !result.payment) {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to record payment.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Payment of ₹${result.payment.amount.toLocaleString()} recorded under receipt ${result.payment.receipt_number}.`,
        data: result.payment,
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
