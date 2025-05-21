import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function OpenMenu({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <MyContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}