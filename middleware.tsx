// middleware.ts
import { NextRequest } from 'next/server';
import { checkAuthCookie } from './app/lib/supabase/middleware';

export default function middleware(req: NextRequest) {
  return checkAuthCookie(req);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/dashboard/:path*',
  ],
};
