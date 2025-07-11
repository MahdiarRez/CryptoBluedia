'use client';

import { useState, useEffect } from 'react';
import { CgDarkMode } from 'react-icons/cg';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-gray-100 p-1 fixed right-5 bottom-5 z-20 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-600"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <CgDarkMode
        className={`w-10 h-10 ${darkMode ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}
      />
    </button>
  );
}

export default ThemeSwitcher;
