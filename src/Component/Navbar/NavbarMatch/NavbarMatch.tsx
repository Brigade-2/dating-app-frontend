import {Link} from "react-router-dom";
import css from "./NavbarMatch.module.css"


const NavbarMatch = () => {
    return (

        <div className={css.NavbarMatch}>
            <Link to='#'>Match</Link>
            <Link to='#'>Messages</Link>
        </div>
    )
}

export default NavbarMatch