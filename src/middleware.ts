import { type NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES: readonly string[] = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
] as const;

const API_ROUTES: readonly string[] = ['/api/'] as const;

const STATIC_FILE_REGEX = /\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|css|js|map)$/;

async function getSession(
  request: NextRequest,
): Promise<{ user: Record<string, unknown>; profile: Record<string, unknown> } | null> {
  void request;

  // TODO M04: Implement real session verification with Supabase Auth.
  // This must read HttpOnly cookies, validate the JWT, and return user + profile.
  return null;
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  // Pass through static file requests.
  if (STATIC_FILE_REGEX.test(pathname)) {
    return NextResponse.next();
  }

  // Pass through API routes.
  if (API_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Pass through public routes.
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Get session (stub - always null until M04).
  const session = await getSession(request);
  void session;

  // ===========================================
  // GUARD 1 - Auth: Unauthenticated user
  // ===========================================

  // TODO M04: Implement real logic.
  // if (!session) {
  //   const loginUrl = new URL('/login', request.url);
  //   loginUrl.searchParams.set('redirectTo', pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  // ===========================================
  // GUARD 2 - Incomplete onboarding
  // ===========================================

  // TODO M04: Implement real logic.
  // if (!session.profile.onboarding_completed && !pathname.startsWith('/onboarding')) {
  //   return NextResponse.redirect(new URL('/onboarding/character', request.url));
  // }

  // ===========================================
  // GUARD 3 - Completed onboarding on /onboarding/*
  // ===========================================

  // TODO M04: Implement real logic.
  // if (session.profile.onboarding_completed && pathname.startsWith('/onboarding')) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url));
  // }

  // ===========================================
  // GUARD 4 - Account status DEAD
  // ===========================================

  // TODO M04: Implement real logic.
  // if (session.profile.account_status === 'DEAD' && !pathname.startsWith('/judgement')) {
  //   return NextResponse.redirect(new URL('/judgement?mode=death', request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     * - sw.js (Service Worker)
     * - manifest.json (PWA manifest)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!_next/static|_next/image|favicon\\.ico|sw\\.js|manifest\\.json|robots\\.txt|sitemap\\.xml).*)',
  ],
};
