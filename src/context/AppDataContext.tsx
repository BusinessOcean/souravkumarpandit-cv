"use client"
import { AppData } from "@/types/AppData.g";
import { createContext, useState } from "react";


const AppDataContext = createContext<any | null>(null)

const AppDataContextProvider = ({ children }: any) => {
  const [appdata, setAppData] = useState<AppData | null>(null);
  // { appdata: appdata, setAppData }
  return (
    <AppDataContext.Provider value={{ appdata: appdata, setAppData }}>
      {...children}
    </AppDataContext.Provider>
  );
};

export { AppDataContext, AppDataContextProvider };