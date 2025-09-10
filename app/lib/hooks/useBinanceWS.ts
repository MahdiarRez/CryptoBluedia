'use client';

import { useEffect, useState } from 'react';

export function useBinanceWS(symbol: string, initialPrice: number) {
  const [price, setPrice] = useState<number>(initialPrice);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(parseFloat(data.p));
    };

    ws.onerror = (err) => {
      console.error('Binance WebSocket error:', err);
    };

    return () => ws.close();
  }, [symbol]);

  return price;
}
