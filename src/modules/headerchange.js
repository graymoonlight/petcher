"use client";

import { useState, useEffect } from 'react';
import HeaderAuth from './header2';
import HeaderGuest from './header1';

const HeaderChange = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };

    checkAuthStatus();

    const interval = setInterval(checkAuthStatus, 500);

    return () => clearInterval(interval);
  }, []);

  return isAuthenticated ? <HeaderAuth /> : <HeaderGuest />;
};

export default HeaderChange;
