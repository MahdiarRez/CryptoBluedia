'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { handleLogout } from '../lib/supabase/actions/logout';

interface AuthContextType {
  profile: any | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  handleLogoutClient: () => void;
}

const AuthContext = createContext<AuthContextType>({
  profile: null,
  loading: true,
  refreshUser: async () => {},
  handleLogoutClient: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  async function refreshUser() {
    setLoading(true);
    const res = await fetch('/api/getUser');
    const data = await res.json();
    setProfile(data.profile);
    setLoading(false);
  }

  function handleLogoutClient() {
    setProfile(null);
    handleLogout();
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ profile, loading, refreshUser, handleLogoutClient }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
