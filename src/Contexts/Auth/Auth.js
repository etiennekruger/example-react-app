import React, { useState } from "react";

export const AuthContext = React.createContext({ token: null });
export const AuthConsumer = AuthContext.Consumer;

export function AuthProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const groups = ["ContractorManager", "AnotherGroup"];
  const value = {
    token: "EXAMPLE-TOKEN",
    name: "Bob",
    groups: groups,
    isAuthenticated: () => {
      return authenticated;
    },
    isManager: () => {
      return groups.includes("ContractorManager");
    },
    signIn: () => {
      setAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
