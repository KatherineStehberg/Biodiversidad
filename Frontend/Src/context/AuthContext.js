import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // Aquí puedes agregar lógica para guardar el token en el localStorage
  };

  const logout = () => {
    setUser(null);
    // Aquí puedes agregar lógica para eliminar el token del localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
