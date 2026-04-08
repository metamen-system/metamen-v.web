import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES: readonly string[] = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
] as const;

const API_ROUTES: readonly string[] = [
  '/api/webhooks',
  '/api/inngest',
  '/api/health',
] as const;

const STATIC_FILE_REGEX =
  /\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|css|js|map)$/;

export function middleware(request: NextRequest): NextResponse {
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

  // TODO M04: Auth guards (getSession, onboarding, subscription, death)
  // For now, all routes pass through without redirects.
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
