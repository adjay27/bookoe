
import Newsletter from "./components/Newsletter"
import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"


function App() {
  
  return (
    <>

      <NavBar />

      <Outlet />
      <Newsletter />
      <Footer />
      
      
    </>
  )
}

export default App
