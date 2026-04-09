import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  void request;

  return NextResponse.json({ registered: false, message: 'Implementar en M16' }, { status: 501 });
}
