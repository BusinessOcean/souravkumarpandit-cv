
import DrawerPannel from './ui/DrawerPannel'
import RightDockPannel from './ui/RightDockPannel'
import MainContent from './ui/MainContent'
import { getAppData } from '../../sanity/sanity-query'

// const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await getAppData()
  return (
    < main className="flex items-stretch justify-between bg-blacky-100" >
      <DrawerPannel appdata={data} ></DrawerPannel>
      <MainContent appdata={data}></MainContent>
      <RightDockPannel appdata={data}></RightDockPannel>
    </main >
  )
}
