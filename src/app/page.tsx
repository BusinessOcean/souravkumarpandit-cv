
import DrawerPannel from './ui/DrawerPannel'
import RightDockPannel from './ui/RightDockPannel'
import MainContent from './ui/MainContent'
import { getAppData } from '../../sanity/sanity-query'
import { AppDataContextProvider } from '@/context/AppDataContext'

// const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const appdata = await getAppData()
  return (
    <AppDataContextProvider data={appdata} >
      < main className="flex items-stretch justify-between bg-blacky-100" >
        <DrawerPannel  ></DrawerPannel>
        <MainContent ></MainContent>
        <RightDockPannel ></RightDockPannel>
      </main >
    </AppDataContextProvider>
  )
}
