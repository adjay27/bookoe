
import Newsletter from "./components/Newsletter"
import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"


function App() {
  
  return (
    <>

      <NavBar />

      <Outlet />
      <Newsletter />
      
      
    </>
  )
}

export default App
