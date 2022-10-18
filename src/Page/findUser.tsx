import {useState} from "react";
import axios from "axios";

interface User{
    name:string
    age?:string
    description: string
    card: string
}

const FindUser = () => {
    //массив пользователей после фильтрации и тд
    const [userActive, setUserActive] = useState<User| null>({name:'Djon', card:'jkljlj', description:'I like cooking'})


    async function H() {
        const responce = await axios.get("http://fedyaisbetterthanlehaatitstuff.duckdns.org:3000/user")
        console.log(responce.data, ';l')
    }

    H()

    const nextUser = () => {
        setUserActive(  {name:'Emili', card: 'kkl', description:'I like cooking'})
    }

    return(
        <div>
            <div>
                Фильтр пользователя
            </div>
            {!userActive && <div>Упс... пользователей нет</div>}


            <div>
                <h1>{userActive?.name}</h1>
                <tr/>
                <h5>{userActive?.description}</h5>
            </div>


            <div>
                <button>Dislike</button>
                <button onClick={nextUser}>Like</button>
            </div>
        </div>
    )
}

export default FindUser