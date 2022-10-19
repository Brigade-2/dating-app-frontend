import {UserIdAction, UserIdActionTypes, UserIdState} from "../../types/userFormatId";


const initialState: UserIdState = {
    user: null,
    loading: false,
    error: null
}

export const UserIdReducer = (state = initialState, action : UserIdAction) : UserIdState => {
    switch (action.type){
        case UserIdActionTypes.FETCH_USERS_ID:
            return {...state, loading: true}
        case UserIdActionTypes.FETCH_USERS_ID_SUCCESS:
            return {...state, loading:false, user: action.payload}
        case UserIdActionTypes.FETCH_USERS_ID_ERROR:
            return {...state, error: action.payload}
        default:
            return {...state}
    }
}