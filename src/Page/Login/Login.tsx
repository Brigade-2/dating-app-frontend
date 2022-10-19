import {useTypeSelector} from "../../hoook/useTypeSelector";
import {useActions} from "../../hoook/useAction";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {UserIdActionCreator} from "../../store/action/id";
import "./Login.css"


const MyLogin = () => {
    const {user, loading, error} = useTypeSelector(state => state.user)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const {FetchUser} = useActions() //в беке login и пароль вернуть id

    useEffect(() => {
        FetchUser()
    }, [])


    if (error) {
        return <h1>{error}</h1>
    }

    const getIdLogin = () => {
        const myUser = user.users.filter(element => element.login === login && element.password === password)
        dispatch(UserIdActionCreator(myUser[0].id)) // когда будет уникально, переписать
    }

    return(
        <div className="loginPage">
            <div className='inputContainer'>
                <input placeholder={'User'} value = {login} onChange={e => setLogin(e.target.value)}/>
                <input placeholder={'Password'} value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={getIdLogin}>Login</button>
            </div>
        </div>
    )

}

export default MyLogin