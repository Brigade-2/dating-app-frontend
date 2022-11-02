import EditProfileForm from "../../Component/EditProfileForm/EditProfileForm";


const Registrate = () => {
    return(
        <div>
            <EditProfileForm user={
                {tags : [''],
                location : '',
                name : '',
                photo : [''],
                preffered_age_end : 0,
                preffered_age_start : 0,
                id : -1,
                password : '',
                preffered_gender : "",
                login : "",
                email : '' }}/>
        </div>
    )
}

export default Registrate

