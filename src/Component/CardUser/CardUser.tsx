import {user} from "../../types/user"
import TegUser from "./TegUser/TegUser";
import css from "./CardUser.module.css"
import UserPhoto from "./UserPhoto/UserPhoto";
import {useState} from "react";
import "./UserImgButton.css"


interface cardUserProps {
    userActive: user
    nextUser: (count: number) => void
    countWatchUser: number
}

const CardUser = (props: cardUserProps) => {
    const [activePhoto, setActivePhoto] = useState(0)

    const photoLastChange = () => {
        activePhoto ?
            setActivePhoto( () => activePhoto - 1)
            : setActivePhoto(() => props.userActive.photo.length - 1)
    }

    const photoNextChange = () => {
        setActivePhoto( () => (activePhoto + 1) % props.userActive.photo.length)
    }

    return <div>
        {!props.userActive ?
            <div className={css.headerUser}>Упс... пользователей на сегодня больше нет</div>
            :
            <div className={css.cardUser}>
                <div>
                    <div className={css.CardUserImj}>

                        <button onClick={photoLastChange} className="arrow left">
                            <svg width="70px" height="90px" viewBox="0 0 50 80">
                                <polyline points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
                            </svg>
                        </button>

                        <UserPhoto activePhoto={activePhoto % props.userActive.photo.length} photo={props.userActive.photo}
                                       name={props.userActive.name} location={props.userActive.location}/>
                        <button onClick={photoNextChange} className="arrow right">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="70px"
                                 height="90px" viewBox="0 0 50 80">
                                <polyline points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
                            </svg>
                        </button>

                    </div>
                    {props.userActive.tags.map((tag, number) => <TegUser teg={tag} key={number}/>)}
                </div>


                <div>
                    <button className= {css.MyButtonDislike}>
                        <img onClick={() => props.nextUser(props.countWatchUser)} src="https://cdn-icons-png.flaticon.com/512/59/59338.png" alt="Кнопка «button»"/>
                    </button>
                    <button className={css.MyButtonLike} >
                        <img onClick={() => props.nextUser(props.countWatchUser)} src="https://www.pnguniverse.com/wp-content/uploads/2020/09/Emoji-love-1024x1024.png" alt="Кнопка «button»"/>
                    </button>
                </div>
            </div>

        }
    </div>
}

export default CardUser