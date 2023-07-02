import Image from 'next/image'
import { Inter } from 'next/font/google'
import DrawerPannel from './ui/DrawerPannel'
import Banner from './ui/Banner'
import RightDockPannel from './ui/RightDockPannel'
import MainContent from './ui/MainContent'
import { AppDataProvider } from '@/context/AppDataContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <AppDataProvider>
    <main className="flex items-stretch justify-between bg-blacky-100">
      <DrawerPannel ></DrawerPannel>
      <MainContent></MainContent>
      <RightDockPannel></RightDockPannel>
    </main>
    // </AppDataProvider>
  )
}
