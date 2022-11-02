import {useTypeSelector} from "../../Hoook/useTypeSelector";
import {useActions} from "../../Hoook/useAction";
import {useEffect, useState} from "react";
import {FetchIdUser} from "../../store/action/userId";
import {useDispatch} from "react-redux";
import {UserLogoutIdActionCreator} from "../../store/action/id";
import UserPhoto from "../../Component/CardUser/UserPhoto/UserPhoto";
import css from "./MyProfile.module.css"
import TegUser from "../../Component/CardUser/TegUser/TegUser";
import {Link} from "react-router-dom";

const MyProfile = () => {
    const profileId = useTypeSelector(state => state.id.id)
    const {user, loading, error} = useTypeSelector(state => state.useId)
    const [activeImg, setActiveImg] = useState(0)
    const dispatch = useDispatch()
    const {FetchIdUser} = useActions()

    useEffect(() => {
        if (profileId !== null) {
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
        dispatch(UserLogoutIdActionCreator())
    }

    return (
        <div className={css.Profile}>
            {user &&
            <div>
                <h1>Мой Профиль</h1>
                <div className={css.imgContainer}>
                    <div className={css.imgPreview}>
                        <UserPhoto activePhoto={activeImg} photo={user.photo} name={user.name}
                                   location={user.location}/>
                    </div>

                    <div className={css.imgContainerGallery}>
                        {
                            user.photo.map((user, count: number) =>
                                <span key={user} onClick={() => setActiveImg(count)}><img src={user}/>
                                    </span>)
                        }
                        <span className={css.addImg}><img
                            src='https://cdn2.iconfinder.com/data/icons/picol-vector/32/image_add-1024.png'/></span>
                    </div>
                </div>
                <button className={css.editProfileButton}><Link to ="/edit">Edit profile</Link></button>
                <h3>Мой email: {user.email}</h3>
                <h3>Предпочтительный возраст от {user.preffered_age_start} до {user.preffered_age_end}</h3>
                {user.tags.map((tag, number) => <TegUser teg={tag} key={number}/>)}

            </div>
            }
            <button className={css.logoutButton} onClick={() => Logout()}>LogOUT</button>
        </div>
    )
}

export default MyProfile