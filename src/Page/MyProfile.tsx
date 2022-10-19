import {useTypeSelector} from "../hoook/useTypeSelector";
import {useActions} from "../hoook/useAction";
import {useEffect} from "react";
import {FetchIdUser} from "../store/action/userId";
import {useDispatch} from "react-redux";
import {UserLogoutIdActionCreator} from "../store/action/id";

const MyProfile = () => {
    const profileId = useTypeSelector(state => state.id.id)
    const {user, loading, error} = useTypeSelector(state => state.useId)
    const dispatch = useDispatch()
    const {FetchIdUser} = useActions()

    useEffect(() => {
        if(profileId !== null){
            FetchIdUser(profileId)
        }

    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const Logout = () => {
        console.log("Ухожу")
        dispatch(UserLogoutIdActionCreator())
    }

    return(
        <div>
            {user&&
            <div>
                <h2>{user.name}</h2>
                <img src={user.photo[0]} alt="Картинка"/>
                <button>Edit profile</button>

                <h3>{user.location}</h3>
                <h3>{user.email}</h3>
                <h3>Предпочтительный возраст от {user.preffered_age_start} до {user.preffered_age_end}</h3>
                {user.tags.map( (tag, number) => <span key = {number}>{tag} </span>)}

            </div>
            }
            <button onClick={() => Logout()}>LogOUT</button>
        </div>
    )
}

export default MyProfile