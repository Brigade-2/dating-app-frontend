import {useEffect, useState} from "react";
import {useActions} from "../../hoook/useAction";
import {FetchUser} from "../../store/action/user";
import {useTypeSelector} from "../../hoook/useTypeSelector";
import {user} from "../../types/user"
import "./findUser.css"
import CardUser from "../../Component/CardUser/cardUser"; //Разобраться с модулем



const FindUser = () => {
    const [countWatch, setCountWatch] = useState(0)
    const {user, loading, error} = useTypeSelector(state => state.user)
    const id = useTypeSelector(state => state.id.id)
    const [userActive, setUserActive] = useState<user | null>(user.users[0])
    const [filterUser, setFilterUser] = useState<user[] | null>()
    console.log(filterUser, 'FILTER')


    const {FetchUser} = useActions()

    //расписать фильтр нормально, посмотреть как делалось, чтобы точно получать данные

    useEffect(() => {
        FetchUser()
        setFilterUser(() => searchUser())
        filterUser && setUserActive( () => filterUser[0])
    }, [])


    const nextUser = (count: number) => {
        setCountWatch(() => count + 1)
        setUserActive(user.users[count + 1])
    }


    const searchUser = (): user[] | null  => {
        return user?
         user.users.filter(user => user.id !== id)
            : null

    }

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return(
        <div>
            <div>
                Фильтр пользователя
            </div>
            {!userActive?
                <div>Упс... пользователей на сегодня больше нет</div>
                : <CardUser userActive={userActive} nextUser={nextUser} countWatchUser={countWatch}/>
            }
        </div>
    )
}

export default FindUser