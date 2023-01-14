import { MenuBar } from "./components/menuBar"
import { Navbar } from "./components/navbar"
import { PageBody } from "./components/pageBody"
import { GlobalStyle } from "./GlobalStyle"

export const App = () => {

  return (
    <>
    <GlobalStyle />
    <Navbar />
    <MenuBar />
    <PageBody />
    </>
  )
}
