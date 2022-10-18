import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return(
        <div className={css.Navbar}>
            <NavLink to ='/search'>Поиск анкет</NavLink>
            <NavLink to =''>Chat</NavLink>
            <NavLink to ='/'>Mоя анкета</NavLink>
        </div>
    )
}

export default Navbar