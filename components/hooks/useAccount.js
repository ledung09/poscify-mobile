import React from "react";

const accountContext = React.createContext(null);

export function useAccount() {
  const contextValue = React.useContext(accountContext);
  if (!contextValue) {
    throw new Error("Context must be used within Provider");
  }
  return contextValue;
}

export function AccountProvider({ children }) {
  const [account, setAccount] = React.useState(null);

  return (
    <accountContext.Provider value={{ account, setAccount }}>
      {children}
    </accountContext.Provider>
  );
}
