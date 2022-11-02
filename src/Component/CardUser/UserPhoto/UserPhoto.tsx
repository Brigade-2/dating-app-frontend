import css from "./UserPhoto.module.css";


interface props{
    activePhoto: number
    photo: Array<string>
    name:string
    location:string
}

const UserPhoto = ({activePhoto, photo, name, location}:props) => {
    return(
            <div className={css.imgContainer}>
                <a className="gradient" href="#"><img src={photo[activePhoto]} alt="Photo user"/></a>
                <h1>{name}</h1>
                <h2>{location}</h2>
            </div>
        )


}

export default UserPhoto