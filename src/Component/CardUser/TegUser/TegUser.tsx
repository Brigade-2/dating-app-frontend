import css from "./TegUser.module.css"

interface TegProps {
    teg : string
    key? : number
}

const TegUser = ( props: TegProps) => {
    return(
        <span className={css.TegUser}>
            {props.teg}
        </span>)
}

export default TegUser