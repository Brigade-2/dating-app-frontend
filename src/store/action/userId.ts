import {Dispatch} from "react";
import axios from "axios";
import {UserIdAction, UserIdActionTypes} from "../../types/userFormatId";


export const FetchIdUser = (id: number) => {
    return async (dispatch: Dispatch<UserIdAction>) => {
        try {
            dispatch({type: UserIdActionTypes.FETCH_USERS_ID})
            const response = await axios.get(`http://localhost:3002/user/${id}`)
            dispatch({type: UserIdActionTypes.FETCH_USERS_ID_SUCCESS, payload: response.data})
        }
        catch (e){
            dispatch({type: UserIdActionTypes.FETCH_USERS_ID_ERROR, payload: "Ошибка со стороны сервера"})
        }
    }
}