import { useState } from 'react';
import '../1.NavBar/NavBar.css'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({logo , items , btn1 ,btn2}) => {
    {/* menu open/close */}
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
    
  return (
    <div className='header-wrapper'>
        <header className='header'>
            <h1 className='logo'>{logo}</h1>
            <div className='left-section'>
                <nav className={` nav ${menuOpen ? "open" : "close"}`}>
                    {items.map((item , index) => {
                        const Icon = item.icon
                        return(
                            <Link to={item.url} key={index}>{item?.icon}{item?.content}</Link>
                        )
                    })}
                </nav>
                <button><Link to="signup" >{btn1}</Link></button>
                <button><Link to="login" >{btn2}</Link></button>
            </div>
            {/* Menu Icon */}
            <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            ☰
            </button>
        </header>
    </div>
  )
}

export default NavBar