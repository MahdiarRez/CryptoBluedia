'use server';

const options = { method: 'GET', headers: { accept: 'application/json' } };

// --------------------- convert currencies list data to array --------------------
function transformApiData(apiData: unknown) {
  if (!apiData) return [];

  return Object.entries(apiData).map(([assetName, values]) => {
    return {
      DigitalAsset: assetName,
      Price: values.usd,
      Change: values.usd_24h_change,
      Volume: values.usd_24h_vol,
      MarketCap: values.usd_market_cap,
      Chart: 'N/A', // Add logic to generate chart links here
      BluediaScoring: 'N/A', // Add logic to generate Bluedia scoring here
    };
  });
}
