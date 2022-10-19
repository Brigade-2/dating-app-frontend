import {user} from "../../types/user"

interface cardUserProps {
    userActive: user
    nextUser: (count:number) => void
    countWatchUser:number
}


const CardUser = (props: cardUserProps) => {
    return(<div>
        {!props.userActive ?
            <div>Упс... пользователей на сегодня больше нет</div>
            :
            <div className='cardUser'>
                <div>
                    <img src={props.userActive.photo[0]} alt="Картинка"/>
                    <h2>{props.userActive.name}</h2>
                    <h3>{props.userActive.location}</h3>
                    {props.userActive.tags.map( (tag, number) => <span key = {number}>{tag} </span>)}
                </div>
                <div>
                    <button onClick={() => props.nextUser(props.countWatchUser)}>Dislike</button>
                    <button onClick={() => props.nextUser(props.countWatchUser)}>Like</button>
                </div>
            </div>

        }
    </div>)
}

export default CardUser