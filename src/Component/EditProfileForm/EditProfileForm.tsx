import css from "./EditProfileForm.module.css";
import InputTegForm from "../InputTeg/UnputTegForm/InputTegForm";
import {user} from "../../types/user"


interface props{
    user: user
}


const EditProfileForm = ({user}:props) => {
    return(
        <div>
            <div className={css.Edit}>
                <h3>Имя пользователя</h3>
                <input defaultValue={user.name}/>
                <h3>Город</h3>
                <input defaultValue={user.location}/>
                <h3>Предпочтительный возраст</h3>
                <input defaultValue={`от ${user.preffered_age_start} до ${user.preffered_age_end}`}/>
                <h3>Интересы</h3>
                <div className={css.inputInterest}>
                    <InputTegForm teg={user.tags}/>
                </div>
                <h3>Логин</h3>
                <input placeholder='login'/>
                <h3>Пароль</h3>
                <input type='password' placeholder='password'/>
            </div>
        </div>
    )
}

export default EditProfileForm