
// import React, { createContext, useState, useContext } from "react";

// // Create context for authentication
// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   const login = (usernameOrEmail, password) => {
//     // Define mock credentials
//     const mockEmail = "One23@click.com";
//     const mockPassword = "password123";

//     // Check if username/email and password match the mock credentials
//     if ((usernameOrEmail === mockEmail || usernameOrEmail === "username") && password === mockPassword) {
//       setIsAuthenticated(true);
//       setUser({ username: "user", email: mockEmail });
//       localStorage.setItem("user", JSON.stringify({ username: "user", email: mockEmail }));
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useState, useContext } from "react";

// Create context for authentication
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Mock credentials for user and admin
  const mockCredentials = {
    user: {
      username: "user",
      email: "user@click.com",
      password: "user123",
      role: "user",
    },
    admin: {
      username: "admin",
      email: "admin@click.com",
      password: "admin123",
      role: "admin",
    },
  };

  // Login function
  const login = (usernameOrEmail, password) => {
    const { user: userCreds, admin: adminCreds } = mockCredentials;

    // Check if credentials match user or admin
    if (
      (usernameOrEmail === userCreds.email || usernameOrEmail === userCreds.username) &&
      password === userCreds.password
    ) {
      setIsAuthenticated(true);
      setUser({ ...userCreds });
      localStorage.setItem("user", JSON.stringify({ ...userCreds }));
      return true;
    } else if (
      (usernameOrEmail === adminCreds.email || usernameOrEmail === adminCreds.username) &&
      password === adminCreds.password
    ) {
      setIsAuthenticated(true);
      setUser({ ...adminCreds });
      localStorage.setItem("user", JSON.stringify({ ...adminCreds }));
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if logged-in user is admin
  const isAdmin = () => user?.role === "admin";

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
