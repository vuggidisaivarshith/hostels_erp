import { NextRequest, NextResponse } from 'next/server';
import { getResidentById } from '@/lib/data/residents-repo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { resident_id, invoice_id, amount } = body;

    if (!resident_id || !amount) {
      return NextResponse.json(
        { success: false, error: 'Resident ID and payment amount are required.' },
        { status: 400 }
      );
    }

    const resident = getResidentById(resident_id);
    if (!resident) {
      return NextResponse.json({ success: false, error: 'Resident not found.' }, { status: 404 });
    }

    // Amount in paise
    const amountInPaise = Math.round(parseFloat(amount) * 100);
    const orderId = `order_devi_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const keyId = process.env.RAZORPAY_KEY_ID || 'rzp_test_devi_shamshabad';

    return NextResponse.json({
      success: true,
      order: {
        id: orderId,
        amount: amountInPaise,
        currency: 'INR',
        receipt: `RCPT-${Date.now()}`,
        status: 'created',
      },
      key_id: keyId,
      resident: {
        name: resident.full_name,
        email: resident.email || 'resident@devihostels.com',
        phone: resident.phone,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
