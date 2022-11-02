import {Link} from "react-router-dom";
import NavbarMatch from "../../Component/Navbar/NavbarMatch/NavbarMatch";
import css from "./Match.module.css"

const Match = () => {
    return(
        <div className={css.Match}>
            <NavbarMatch/>
            <div className = {css.Content}>
               <h1>У вас пока нет взаимностей взаимностей</h1>
            </div>
        </div>

    )
}

export default Match