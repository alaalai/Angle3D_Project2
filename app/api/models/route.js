import { NextResponse } from 'next/server';
import { models } from '../../../lib/data';

export async function GET() {
  return NextResponse.json(models);
}

export async function POST(request) {
  const body = await request.json();
  const created = { ...body, id: `m-${Date.now()}` };
  return NextResponse.json(created, { status: 201 });
}
