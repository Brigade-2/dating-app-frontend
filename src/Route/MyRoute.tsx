import {NavLink, Routes, Route, useNavigate} from "react-router-dom";
import MyLogin from "../Page/Login/Login";
import MyProfile from "../Page/MyProfile";
import FindUser from "../Page/FindUser/findUser";
import Match from "../Page/Match";
import {useTypeSelector} from "../hoook/useTypeSelector";
import Navbar from "../Component/Navbar/Navbar";
import NavbarNoAuth from "../Component/Navbar/NavbarNoAuth";
import StartPage from "../Page/StartPage/startPage";


const MyRoute = () => {
    const auth = useTypeSelector(state => state.id.auth)
    return(
        <div>
            {
                auth?     //расписать через if, чтобы меньше строк. Navbar понять куда
                    <div>
                        <Navbar/>
                        <Routes>
                            <Route path='/'>
                                <Route path='login' element={<MyProfile/>}/>      //редирект
                                <Route path='profile' element={<MyProfile/>}/>
                                <Route path='search' element={<FindUser/>}/>
                                <Route path='match' element={<Match/>}/>
                            </Route>
                        </Routes>
                    </div>
                    :
                    <div>
                        <NavbarNoAuth/>
                        <Routes>
                            <Route path='/'>
                                <Route path='login' element={<MyLogin/>}/>
                                <Route path='/' element={<StartPage/>}/>
                                <Route path='*' element={<StartPage/>}/>
                            </Route>
                        </Routes>
                    </div>
            }
        </div>
    )
}

export default MyRoute