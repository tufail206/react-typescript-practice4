import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"



const Layout = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
         
          <Sidebar />
             
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >

          <Header />
          <Outlet />

        </div>
             
    
                    
  
      
    
    </div>
  )
}

export default Layout
