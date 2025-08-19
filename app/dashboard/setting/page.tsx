'use client';

import { useAuth } from '@/app/context/authContext';
import { handleLogout } from '@/app/lib/supabase/actions/logout';

function Setting() {
  const { handleLogoutClient } = useAuth();
  return (
    <div>
      <button
        className="bg-red-500 text-white px-5 py-2"
        onClick={() => {
          handleLogoutClient();
        }}
      >
        log out
      </button>
    </div>
  );
}

export default Setting;
