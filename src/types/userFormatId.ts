import {user} from './user'

export interface UserIdState{
    user: user | null
    loading: boolean
    error: string | null
}




export enum UserIdActionTypes {
    FETCH_USERS_ID = "FETCH_USERS_ID",
    FETCH_USERS_ID_SUCCESS = "FETCH_USERS_ID_SUCCESS",
    FETCH_USERS_ID_ERROR = "FETCH_USERS_ID_ERROR"
}


interface FetchUserIdAction {
    type: UserIdActionTypes.FETCH_USERS_ID,
    payload?: null
}

interface FetchUserIdSuccessAction {
    type: UserIdActionTypes.FETCH_USERS_ID_SUCCESS,
    payload: user
}

interface FetchUserIdErrorAction {
    type: UserIdActionTypes.FETCH_USERS_ID_ERROR,
    payload: string
}

export type UserIdAction = FetchUserIdAction | FetchUserIdSuccessAction | FetchUserIdErrorAction