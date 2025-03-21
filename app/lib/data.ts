'use server';

const options = { method: 'GET', headers: { accept: 'application/json' } };
const apiKey = 'da0Ighqcnxpfo3O1hYWAzSavsDZHQbV7VXL';

// --------------------- get currencies list data --------------------
// export async function getCurrencies() {
//   let currs: itemT[] = [];
//   try {
//     const res = await fetch(
//       'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Charmony%2Cshiba&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&x_cg_demo_api_key=CG-AKrNbSo1eQ5t23w4Mymx9XP7',
//       options
//     );

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     currs = transformApiData(data);
//   } catch (e) {
//     console.log('error', e);
//   }
//   return currs;
// }

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

//
// export async function getCryptoData() {
//   await new Promise((resolve) => setTimeout(resolve, 2500));
//
//   const res = await fetch(
//     `https://www.worldcoinindex.com/apiservice/ticker?key=${apiKey}&label=onebtc&fiat=btc`
//   );
//
//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }
//
//   const data = await res.json();
//   return data.Markets[0];
// }
