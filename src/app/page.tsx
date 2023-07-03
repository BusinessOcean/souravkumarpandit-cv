import Image from 'next/image'
import { Inter } from 'next/font/google'
import DrawerPannel from './ui/DrawerPannel'
import RightDockPannel from './ui/RightDockPannel'
import MainContent from './ui/MainContent'
import { getAppData } from '../../sanity/sanity-query'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const appdata = await getAppData()

  return (
    // <AppDataProvider>

    <main className="flex items-stretch justify-between bg-blacky-100">
      <DrawerPannel appdata={appdata} ></DrawerPannel>
      <MainContent appdata={appdata}></MainContent>
      <RightDockPannel appdata={appdata}></RightDockPannel>
    </main>
    // </AppDataProvider>
  )
}
