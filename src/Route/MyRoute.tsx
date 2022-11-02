import {Navigate, Routes, Route, useNavigate} from "react-router-dom";
import MyLogin from "../Page/Login/Login";
import MyProfile from "../Page/MyProfile/MyProfile";
import FindUser from "../Page/FindUser/findUser";
import Match from "../Page/Match/Match";
import {useTypeSelector} from "../Hoook/useTypeSelector";
import Navbar from "../Component/Navbar/Navbar";
import NavbarNoAuth from "../Component/Navbar/NavbarNoAuth";
import StartPage from "../Page/StartPage/startPage";
import Edit from "../Page/Edit/Edit";
import Registrate from "../Page/Registrate/Registrate";


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
                                <Route path='login' element={<Navigate to="/profile"/>}/>
                                <Route path='profile' element={<MyProfile/>}/>
                                <Route path='edit' element={<Edit/>}/>
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
                                <Route path='registration' element={<Registrate/>}/>
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