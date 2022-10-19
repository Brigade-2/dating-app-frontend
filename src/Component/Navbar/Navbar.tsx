import {NavLink} from "react-router-dom";
import  './Navbar.css' //пофиксить модули


const Navbar = () => {
    return(
        <nav className = "navMenu">
            <div className='link'>
                <NavLink to ='/search'>Поиск анкет</NavLink>
                <NavLink to ='/match'>Match</NavLink>
                <NavLink to ='/profile'>Mоя анкета</NavLink>
            </div>
            <div className="dot"/>
        </nav>
    )
}

export default Navbar