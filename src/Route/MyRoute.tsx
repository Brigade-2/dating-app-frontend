import {NavLink, Routes, Route, useNavigate} from "react-router-dom";
import MyLogin from "../Page/Login";


const MyRoute = () => {
    return(
        <div>
            <Routes>
                <Route path='/'>
                    <Route path='login' element={<MyLogin/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default MyRoute