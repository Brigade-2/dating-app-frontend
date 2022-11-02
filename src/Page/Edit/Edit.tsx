import {useTypeSelector} from "../../Hoook/useTypeSelector";
import {useEffect, useState} from "react";
import {useActions} from "../../Hoook/useAction";
import css from "./Edit.module.css"
import InputTegForm from "../../Component/InputTeg/UnputTegForm/InputTegForm";
import EditProfileForm from "../../Component/EditProfileForm/EditProfileForm";

const Edit = () => {

    const profileId = useTypeSelector(state => state.id.id)
    const {user, loading, error} = useTypeSelector(state => state.useId)
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
    return (
        <div className={css.Edit}>
            {user ?
                <div>
                    <EditProfileForm user={user}/>
                </div>
                : <div>Идет загрузка</div>}

        </div>
    )
}

export default Edit;