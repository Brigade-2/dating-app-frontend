import {useEffect, useState} from "react";
import {useActions} from "../../Hoook/useAction";
import {FetchUser} from "../../store/action/user";
import {useTypeSelector} from "../../Hoook/useTypeSelector";
import {user} from "../../types/user"
import css from "./findUser.module.css"
import CardUser from "../../Component/CardUser/CardUser";
import MyModal from "../../Component/MyModal/MyModal";
import InputTeg from "../../Component/InputTeg/InputTeg";
import {useTegUsers} from "../../Hoook/useUser"; //Разобраться с модулем



const FindUser = () => {
    const [countWatch, setCountWatch] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [filter, setFilter] = useState({teg: Array<string>() ,  city: ''})
    const {user, loading, error} = useTypeSelector(state => state.user)
    const id = useTypeSelector(state => state.id.id)
    const {FetchUser} = useActions()
    const GetFilterPost = useTegUsers(user.users, id, filter.teg, filter.city)


    useEffect(() => {
        FetchUser()
    }, [])


    const nextUser = (count: number) => {
        setCountWatch(() => count + 1)
    }

    const searchUser = (): user[] | null => {
        return user&&
         user.users.filter(user => user.id !== id)
    }

    const filterUser : user[] | null = searchUser()

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const filterUserFunction = (tags: Array<string>, city: string) => {
        setFilter({teg: tags, city: city})
    }


    return(
        <div className={css.filterUserCard}>

            <div className={css.filterUser}>
                <MyModal modalActive={openModal} setModalActive={setOpenModal}>
                    <InputTeg setFilter={filterUserFunction}/>
                </MyModal>
                <button className={css.openFilterButton} onClick={() => setOpenModal(true)}>Фильтр пользователей</button>
            </div>
            <div className={css.questionnaireUser}>
                {
                    (!GetFilterPost)?
                        <h1 className={css.headUser}>Упс... пользователей на сегодня больше нет</h1>
                        : <CardUser userActive={GetFilterPost[countWatch]} nextUser={nextUser} countWatchUser={countWatch}/>
                }
            </div>
        </div>
    )
}

export default FindUser