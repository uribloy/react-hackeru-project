import { createContext, useContext, useState } from "react";
import usersServices from "../../services/usersService";

const authContext = createContext({
  login: () => {},
  logout: () => {},
  createUser: () => {},
  user: null,
});
authContext.displayName = "auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(usersServices.getUser());
  const refreshUser = () => setUser(usersServices.getUser());

  const login = async (credentials) => {
    const response = await usersServices.login(credentials);
    refreshUser();
    return response;
  };
  const logout = () => {
    usersServices.logout();
    refreshUser();
  };
  return (
    <authContext.Provider
      value={{ login, logout, createUser: usersServices.createUser, user }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
