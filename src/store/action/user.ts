import {Dispatch} from "react";
import {UserAction, UserActionTypes} from "../../types/userFormat";
import axios from "axios";


const FetchUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const responce = await axios.get('http://fedyaisbetterthanlehaatitstuff.duckdns.org:3000/user')
            console.log(responce.data)
        }
        catch (e){

        }
    }
}