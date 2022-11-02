import {Dispatch} from "react";
import {UserAction, UserActionTypes} from "../../types/userFormat";
import axios from "axios";


export const FetchUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('http://localhost:3002/user')
            console.log(response.data, 'data')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }
        catch (e){
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: "Ошибка со стороны сервера"})
        }
    }
}