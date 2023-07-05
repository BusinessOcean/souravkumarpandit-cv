"use client"
import { AppData } from "@/types/AppData.g";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const AppDataContext = createContext<AppData | null>(null)

const AppDataContextProvider = ({ data, children }: PropsWithChildren<{ data: AppData }>) => {
  const [appdata, setAppData] = useState<AppData | null>(data);

  return (
    <AppDataContext.Provider value={appdata}>
      {children}
    </AppDataContext.Provider>
  );
};


function useAppDataContext() {
  const value = useContext(AppDataContext);
  return value

}
export { AppDataContext, AppDataContextProvider, useAppDataContext };