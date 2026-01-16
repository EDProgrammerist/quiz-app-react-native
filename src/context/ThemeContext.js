// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const lightTheme = {
  mode: 'light',
  background: '#f5f7fa',
  cardBg: '#ffffff',
  text: '#333333',
  subText: '#666666',
  primary: '#4a90e2',
  tint: '#fff'
};

export const darkTheme = {
  mode: 'dark',
  background: '#121212',
  cardBg: '#1e1e1e',
  text: '#ffffff',
  subText: '#aaaaaa',
  primary: '#bb86fc', // A lighter purple for dark mode contrast
  tint: '#121212'
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem('THEME_MODE');
      if (storedTheme === 'dark') setIsDarkMode(true);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleTheme = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem('THEME_MODE', newMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};