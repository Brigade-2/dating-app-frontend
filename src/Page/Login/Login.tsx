import {useTypeSelector} from "../../Hoook/useTypeSelector";
import {useActions} from "../../Hoook/useAction";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {UserIdActionCreator} from "../../store/action/id";
import s from "./Login.module.css"
import {Link} from "react-router-dom";


const MyLogin: React.FC = () => {
    const {user, loading, error} = useTypeSelector(state => state.user)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const {FetchUser} = useActions() //в беке login и пароль вернуть id

    const onFormSubmit = (e: React.FormEvent) : void => {
        e.preventDefault();
    }

    useEffect(() => {
        FetchUser()
    }, [])


    if (error) {
        return <h1>{error}</h1>
    }

    const getIdLogin = () => {
        const myUser = user.users.filter(element => element.login === login && element.password === password)
        myUser&& dispatch(UserIdActionCreator(myUser[0].id)) // когда будет уникально, переписать
    }

    return(
        <div className={s.loginPage}>
            <form onSubmit={onFormSubmit} className={s.inputContainer}>
                <p>Welcome</p>
                <input className={s.MyInput} placeholder={'User'} value = {login} onChange={e => setLogin(e.target.value)}/>
                <input className={s.MyInput} placeholder={'Password'}  type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className={s.MyButton} onClick={getIdLogin}>Log in</button>
                <div className={s.MyRegistrar}>
                    <p>Еще не зарегистрирован? </p>
                    <Link to='/registration'>registration</Link>
                </div>
            </form>

        </div>
    )

}

export default MyLogin