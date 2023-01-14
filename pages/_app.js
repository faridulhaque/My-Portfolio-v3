import { createContext } from 'react'
import useModals from '../hooks/useModals'
import '../styles/globals.css'
export const GlobalContext = createContext()


export default function App({ Component, pageProps }) {
  const {
    modalData
  } = useModals()

  const globalData = {
    modalData
  }


  return <GlobalContext.Provider value={globalData} >
    <Component {...pageProps} />
  </GlobalContext.Provider>
}
