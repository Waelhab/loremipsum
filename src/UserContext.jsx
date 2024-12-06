import React, { createContext, useState } from "react";

export const UserContext = createContext();

// The userContext that we pass between components to ensure consistency of the user's information
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
