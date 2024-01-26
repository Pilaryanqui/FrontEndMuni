// En context/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Recupera el estado de autenticación desde local storage al cargar la aplicación
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const setAuthUser = (user) => {
    setCurrentUser(user);
    // Almacena el estado de autenticación en local storage
    localStorage.setItem('currentUser', user);
  };

  const logout = () => {
    setCurrentUser(null);
    // Elimina el estado de autenticación de local storage al cerrar sesión
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ currentUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
