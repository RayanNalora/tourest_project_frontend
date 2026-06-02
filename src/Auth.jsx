import React from 'react' 
import NavBar from './component/1.NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './component/8.Footer/Footer'
import { navItems } from './data/dataHeader'
import { footer } from './data/dataFooter'

const Auth = () => {
  return (
    <div>
        <NavBar
        logo="Trippy"
        items={navItems}
        btn="Sign Up"
        />
        <Outlet/>
        {console.log(footer.links)}
        <Footer
            footer={footer}
            />
    </div>
  )
}

export default Auth