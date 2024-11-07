import { useState, useEffect } from 'react';
import HeaderAuth from './header2';
import HeaderGuest from './header1';

const HeaderChange = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated ? <HeaderAuth /> : <HeaderGuest />;
};

export default HeaderChange;