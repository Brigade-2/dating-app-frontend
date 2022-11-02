import {NavLink} from "react-router-dom";
import  css from './Navbar.module.css' //пофиксить модули


const Navbar = () => {
    return(
        <nav className = {css.navMenu}>
            <div className={css.link}>
                <NavLink to ='/search'>Поиск анкет</NavLink>
                <NavLink to ='/match'>Match</NavLink>
                <NavLink to ='/profile'>Mоя анкета</NavLink>
            </div>
            <div className={css.dot}/>
        </nav>
    )
}

export default Navbar