import { NextResponse } from 'next/server';

// TODO M14: Implementar verificación de firma Stripe y procesamiento de eventos.
export async function POST(request: Request) {
  void request;

  return NextResponse.json({ received: true }, { status: 200 });
}
