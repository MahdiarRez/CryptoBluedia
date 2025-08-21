'use client';

import { useClickOutside } from '@/app/lib/hooks/useOutside';
import { ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

function ModalBox({
  children,
  buttonText,
  headerText,
}: {
  children: ReactNode;
  buttonText?: string;
  headerText?: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => setShowModal(false));

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-2 bg-DarkBlue text-WHITE rounded-lg"
      >
        {buttonText}
      </button>

      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className="bg-white dark:bg-DarkBlue rounded-xl w-1/2 max-h-[80vh] overflow-auto relative"
              ref={modalRef}
            >
              <div className="w-full flex flex-row-reverse mb-2 items-center justify-between sticky p-7 bg-white/85 backdrop-blur-sm z-20 top-0">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 rounded-sm text-2xl sm:hover:bg-DarkBlue sm:transition-colors sm:duration-300"
                >
                  <IoClose className="text-white" />
                </button>
                <h2 className="text-2xl font-semibold text-DarkBlue">
                  {headerText}
                </h2>
              </div>
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ModalBox;
