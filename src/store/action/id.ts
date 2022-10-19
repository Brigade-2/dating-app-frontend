import {IdAction, MyIdActionTypes} from "../Redusers/id";


export const UserIdActionCreator = (id: number) : IdAction => {
    return {type: MyIdActionTypes.USER_ID_SUCCESS, payload: id}
}

export const UserLogoutIdActionCreator = () => {
    return {type: MyIdActionTypes.USER_ID_LOGOUT}
}