// app/lib/supabase/middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function checkAuthCookie(request: NextRequest) {
  // بررسی وجود هر auth-token پروژه به صورت دینامیک
  const authCookieExists = request.cookies
    .getAll()
    .some((cookie) => /^sb-.*-auth-token$/.test(cookie.name));

  // اگر کوکی وجود ندارد و مسیر login نیست → redirect سریع
  if (!authCookieExists && !request.nextUrl.pathname.startsWith('/login')) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // کوکی وجود دارد → ادامه مسیر
  return NextResponse.next({ request });
}
