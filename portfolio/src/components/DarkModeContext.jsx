import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for user preference
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode !== null) {
      const isDark = savedDarkMode === 'true';
      setDarkMode(isDark);
      updateDarkModeClass(isDark);
    } else {
      // Use system preference if no saved preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
      updateDarkModeClass(systemPrefersDark);
    }
  }, []);

  const updateDarkModeClass = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateDarkModeClass(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const value = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};