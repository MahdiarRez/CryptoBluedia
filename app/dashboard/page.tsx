'use client';
import Link from 'next/link';
import { useAuth } from '../context/authContext';
import { handleLogout } from '../lib/supabase/actions/logout';

function Dashboard() {
  const { handleLogoutClient: logout } = useAuth();
  return (
    <div className="flex justify-center items-center p-32 bg-red-200">
      <button
        onClick={() => {
          handleLogout();
          logout();
        }}
      >
        Logout
      </button>
      <Link href={'/currencies'}>
        <button className="bg-green-300">Curr</button>
      </Link>
    </div>
  );
}

export default Dashboard;
