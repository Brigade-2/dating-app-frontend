import {NavLink} from "react-router-dom";
import './Navbar.css' //пофиксить модули


const NavbarNoAuth = () => {
    return (
        <nav className="navMenu navMenuNoActive">
            <div className='link'>
                <NavLink to='/' className='itemLeftHref'>About</NavLink>
                <NavLink to='/login'>login</NavLink>
            </div>
            <div className="dot"/>
        </nav>
    )
}

export default NavbarNoAuth