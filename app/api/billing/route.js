import { NextResponse } from 'next/server';
import { invoices } from '../../../lib/data';

export async function GET() {
  return NextResponse.json({ invoices });
}

export async function POST(request) {
  const body = await request.json();
  const invoice = { id: `inv-${Date.now()}`, status: 'بانتظار الدفع', ...body };
  return NextResponse.json(invoice, { status: 201 });
}
