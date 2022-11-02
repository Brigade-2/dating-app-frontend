import {NavLink} from "react-router-dom";
import css from './Navbar.module.css' //пофиксить модули


const NavbarNoAuth = () => {
    return (
        <nav className={`${css.navMenu} ${css.navMenuNoActive}`}>
            <div className={css.link}>
                <NavLink to='/' className={css.itemLeftHref}>About</NavLink>
                <NavLink to='/login'>login</NavLink>
            </div>
        </nav>
    )
}

export default NavbarNoAuth