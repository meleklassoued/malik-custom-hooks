import React, { createContext, useState, ReactNode } from "react ";

// context type definition

interface MycontextType {
  appStaus: string;
  setAppStatus: (newStatus: string) => void;
}
