import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // TODO M04: Implementar exchange PKCE con Supabase Auth
  const loginUrl = new URL('/login', request.url);
  return NextResponse.redirect(loginUrl);
}
