import { NavBar} from './header/navBar'
import { ItemListContainer } from './header/components/itemListContainer'
import './App.css'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer text="PRODUCTOS" />
    </>
  )
}

export default App
