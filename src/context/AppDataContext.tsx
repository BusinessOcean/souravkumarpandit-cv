"use client"
import { AppData } from "@/types/AppData.g";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import { getAppData } from "../../sanity/sanity-query";

// type AppDataStore = { appdata: AppData | null, setAppData: Dispatch<SetStateAction<AppData | null>> }

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