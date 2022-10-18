import {UserAction, UserActionTypes, UserState} from "../../types/userFormat";



const initialState: UserState = {
    user: [],
    loading: false,
    error: null
}

export const UserReducer = (state = initialState, action : UserAction) : UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading:false, user: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, error: action.payload}
        default:
            return {...state}
    }
}