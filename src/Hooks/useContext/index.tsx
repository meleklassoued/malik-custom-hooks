/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from "react";

// define type
interface IMyContext {
  appStatus: string;
  setAppStatus: (newStatus: string) => void;
}

// create the context
const Mycontext = createContext<IMyContext | undefined>(undefined);

// create the provider component
interface IMycontextProviderProps {
  children: ReactNode;
}

const MycontextProvider: React.FC<IMycontextProviderProps> = ({ children }) => {
  const [appStatus, setAppStatus] = useState("ON");

  const contextValue: IMyContext = {
    appStatus,
    setAppStatus: setAppStatus,
  };

  return (
    <Mycontext.Provider value={contextValue}>{children}</Mycontext.Provider>
  );
};

/**
 * here we gonna create a custom hook for the context
 * if
 */

const useMyContext = (): IMyContext => {
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("useMyContext must be used with a MycontextProvider");
  }
  return context;
};

export { MycontextProvider, useMyContext };
