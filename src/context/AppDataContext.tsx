"use client"
import { AppData } from '@/types/AppData.g';
import { type } from 'os';
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from 'react';

const appdata: AppData | null = null

type UpdateAppData = (data: AppData) => void

export const AppDataContext = createContext<AppData | null>(appdata);
export const UpdateAppDataContext = createContext<UpdateAppData | null>(null);


export function useAppData() {
  return useContext(AppDataContext)
}


export function useUpdateAppData() {
  return useContext(UpdateAppDataContext)
}
export function AppDataProvider(props: { children: any }) {
  const [data, setData] = useState<AppData | null>(appdata)
  function updateAppData(data: AppData) {
    setData(data)
  }

  return <AppDataContext.Provider value={data}>
    {/* <UpdateAppDataContext.Provider value={updateAppData}> */}
    {props.children}
    {/* </UpdateAppDataContext.Provider> */}
  </AppDataContext.Provider>
}
