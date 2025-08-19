'use client';

import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { useAuth } from '@/app/context/authContext';

interface Currency {
  id: string;
  name: string;
  symbol: string;
}

function AddAsset() {
  const [showModal, setShowModal] = useState(false);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(false);

  const { refreshUser } = useAuth(); // برای رفرش واچ‌لیست بعد از اضافه شدن

  useEffect(() => {
    async function fetchCurrencies() {
      setLoading(true);
      try {
        const res = await fetch('/api/currencies'); // فرض بر اینکه API داری
        const data = await res.json();
        setCurrencies(data.currencies ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (showModal) fetchCurrencies();
  }, [showModal]);

  async function handleAdd(currencyId: string) {
    try {
      const res = await fetch('/api/watchlist/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currency_id: currencyId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to add');

      await refreshUser();
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-DarkBlue text-WHITE rounded-lg"
      >
        Add Asset
      </button>

      {showModal && (
        <div className=" absolute top-0 right-0 bottom-0 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-DarkBlue rounded-xl p-6 w-[400px] max-h-[80vh] overflow-auto relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-2xl"
            >
              <IoClose />
            </button>
            <h2 className="text-xl font-bold mb-4">Select Currency</h2>

            {loading ? (
              <p>Loading...</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {currencies.map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => handleAdd(c.id)}
                      className="w-full text-left px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {c.name} ({c.symbol})
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AddAsset;
