import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/app/lib/supabase/server';
import { fetchCurrencyById } from '@/app/lib/utils/data';

export async function GET(req: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ watchlist: [], user: null });
    }

    const { data: watchlist, error: watchlistError } = await supabase
      .from('watchlist')
      .select('currency_id')
      .eq('user_id', user.id);

    if (watchlistError) {
      console.error('[Watchlist API] Supabase error:', watchlistError);
      return NextResponse.json({ watchlist: [], user });
    }

    const currencyIds = watchlist.map((item) => item.currency_id);
    const { data: currencies, error: currenciesError } = await supabase
      .from('currenciesList')
      .select('*')
      .in('name', currencyIds);
    console.log(currencies);

    return NextResponse.json({ watchlist: currencies ?? [], user });
  } catch (err) {
    console.error('[Watchlist API] Unexpected error:', err);
    return NextResponse.json({ watchlist: [], user: null });
  }
}
