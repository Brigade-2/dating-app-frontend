import {Dispatch} from "react";
import axios from "axios";
import {MatchIdAction, MatchIdActionTypes} from "../../types/matchFormatId";


export const FetchIdMatch = (id: number) => {
    return async (dispatch: Dispatch<MatchIdAction>) => {
        try {
            dispatch({type: MatchIdActionTypes.FETCH_MATCHS_ID})
            const response = await axios.get(`http://localhost:3002/match`)
            dispatch({type: MatchIdActionTypes.FETCH_MATCHS_ID_SUCCESS, payload: response.data})
        }
        catch (e){
            dispatch({type: MatchIdActionTypes.FETCH_MATCHS_ID_ERROR, payload: "Ошибка со стороны сервера"})
        }
    }
}