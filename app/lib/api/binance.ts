export async function getInitialPrice(symbol: string): Promise<number> {
  const res = await fetch(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`,
    { next: { revalidate: 60 } } // کش برای کاهش فشار روی API
  );

  if (!res.ok) throw new Error('Failed to fetch Binance price');
  const data = await res.json();
  return parseFloat(data.price);
}
