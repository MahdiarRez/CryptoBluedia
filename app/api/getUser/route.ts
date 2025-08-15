import { NextRequest, NextResponse } from 'next/server';
import { getUserWithProfile } from '@/app/dashboard/actions/getUserProfile';

export async function GET(req: NextRequest) {
  const { user, profile, error } = await getUserWithProfile();
  return NextResponse.json({ user, profile, error });
}
