import Image from 'next/image'
import { Inter } from 'next/font/google'
import DrawerPannel from './ui/DrawerPannel'
import Banner from './ui/Banner'
import RightDockPannel from './ui/RightDockPannel'
import MainContent from './ui/MainContent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex items-stretch justify-between bg-blacky-100">
      <DrawerPannel ></DrawerPannel>
      <MainContent></MainContent>
      <RightDockPannel></RightDockPannel>
    </main>
  )
}
