import { createContext, useContext, useEffect, useState } from 'react';

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const [dir, setDir] = useState('ltr');

  useEffect(() => {
    const savedDir = localStorage.getItem('direction');
    if (savedDir) {
      document.documentElement.setAttribute('dir', savedDir);
      setDir(savedDir);
    } else {
      const currentDir = document.documentElement.getAttribute('dir') || 'rtl';
      setDir(currentDir);
      localStorage.setItem('direction', currentDir);
    }
  }, []);

  const toggleDirection = () => {
    const newDir = dir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    setDir(newDir);
    localStorage.setItem('direction', newDir)
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
