import { createContext } from 'react'
import useModals from '../hooks/useModals'
import useProjectsInfo from '../hooks/useProjectsInfo'
import '../styles/globals.css'
export const GlobalContext = createContext()


export default function App({ Component, pageProps }) {
  const {
    modalData
  } = useModals()

  const {projectsInfo} = useProjectsInfo()

  const globalData = {
    modalData,
    projectsInfo
  }



  return <GlobalContext.Provider value={globalData} >
    <Component {...pageProps} />
  </GlobalContext.Provider>
}
