import {MatchIdAction, MatchIdActionTypes, MatchIdState} from "../../types/matchFormatId";


const initialState: MatchIdState = {
    match: null,
    loading: false,
    error: null
}

export const MatchIdReducer = (state = initialState, action : MatchIdAction) : MatchIdState => {
    switch (action.type){
        case MatchIdActionTypes.FETCH_MATCHS_ID:
            return {...state, loading: true}
        case MatchIdActionTypes.FETCH_MATCHS_ID_SUCCESS:
            return {...state, loading:false, match: action.payload}
        case MatchIdActionTypes.FETCH_MATCHS_ID_ERROR:
            return {...state, error: action.payload}
        default:
            return {...state}
    }
}