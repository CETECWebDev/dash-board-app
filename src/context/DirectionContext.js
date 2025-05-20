import { createContext, useContext, useEffect, useState } from 'react';

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const [dir, setDir] = useState('ltr');

  useEffect(() => {
    const currentDir = document.documentElement.getAttribute('dir');
    setDir(currentDir || 'ltr');
  }, []);

  const toggleDirection = () => {
    const newDir = dir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    setDir(newDir);
  };

  return (
    <DirectionContext.Provider value={{ dir, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirectionContext = () => {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};
