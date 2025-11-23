import { NextResponse } from 'next/server';
import { projects } from '../../../lib/data';

export async function GET() {
  return NextResponse.json(projects);
}

export async function POST(request) {
  const body = await request.json();
  const created = { ...body, id: `p-${Date.now()}` };
  return NextResponse.json(created, { status: 201 });
}
