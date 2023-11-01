// NavbarContext.js
import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  // Scroll event handler to change the navbar background
  const changeNavbarBackground = (headerHeight) => {
    if (window.scrollY >= headerHeight) {
      setNavbarBackground('bg-primary');
    } else {
      setNavbarBackground('transparent');
    }
  };

  return (
    <NavbarContext.Provider value={{ navbarBackground, changeNavbarBackground }}>
      {children}
    </NavbarContext.Provider>
  );
};
