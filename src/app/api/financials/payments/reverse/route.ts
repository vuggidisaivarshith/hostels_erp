import { NextRequest, NextResponse } from 'next/server';
import { reversePayment } from '@/lib/data/financials-repo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { payment_id, reversal_reason, actor_name } = body;

    if (!payment_id || !reversal_reason || !actor_name) {
      return NextResponse.json(
        { success: false, error: 'Payment ID, reversal reason, and authorizer name are required.' },
        { status: 400 }
      );
    }

    const result = reversePayment(payment_id, reversal_reason, actor_name);

    if (!result.success || !result.reversalPayment) {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to reverse payment.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Payment reversed successfully. Adjustment receipt ${result.reversalPayment.receipt_number} generated.`,
      data: result.reversalPayment,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
