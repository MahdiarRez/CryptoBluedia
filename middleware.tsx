import { NextRequest } from 'next/server';
import { updateSession } from './app/lib/supabase/middleware';

export default async function middleware(req: NextRequest) {
  return await updateSession(req);
}

export const config = {
  matcher: '/aboutBluedia',
};
