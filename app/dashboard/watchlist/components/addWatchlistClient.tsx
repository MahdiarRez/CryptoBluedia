'use client';

import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import { useAuth } from '@/app/context/authContext';
import { Currency } from '@/app/lib/types';
import { hexOpacity } from '@/app/lib/helper';
import { useClickOutside } from '@/app/lib/hooks/useOutside';
import WatchlistCard from './watchlistCard';

export default function AddAssetClient({
  currencies,
}: {
  currencies: Currency[];
}) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { refreshUser } = useAuth();

  async function handleAdd(currencyId: string) {
    const res = await fetch('/api/watchlist/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currency_id: currencyId }),
    });
    if (res.ok) {
      await refreshUser();
      setShowModal(false);
    }
  }

  useEffect(() => {
    if (showModal) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [showModal]);

  useClickOutside(modalRef, () => setShowModal(false));

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-DarkBlue text-WHITE rounded-lg"
      >
        Add Asset
      </button>

      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 right-0 left-0">
            <div
              className="bg-white dark:bg-DarkBlue rounded-xl p-6 w-1/2 max-h-[80vh] overflow-auto relative"
              ref={modalRef}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-2xl"
              >
                <IoClose />
              </button>
              <h2 className="text-xl font-bold mb-4 text-DarkBlue">
                Select Currency
              </h2>

              <ul className="flex flex-col gap-4">
                {currencies.map((c) => (
                  <li key={c.id}>
                    {/* <button
                      onClick={() => handleAdd(c.id)}
                      style={{ backgroundColor: hexOpacity(c.color, 0.1) }}
                      className="w-full text-left font-normal capitalize text-DarkBlue px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {c.name} ({c.id})
                    </button> */}
                    <WatchlistCard showPrice={false} curr={c} />
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
