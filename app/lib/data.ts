'use server';

const apiKey = 'da0Ighqcnxpfo3O1hYWAzSavsDZHQbV7VXL';

export async function getCryptoData() {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const res = await fetch(
    `https://www.worldcoinindex.com/apiservice/ticker?key=${apiKey}&label=onebtc&fiat=btc`
  );

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await res.json();
  return data.Markets[0];
}
