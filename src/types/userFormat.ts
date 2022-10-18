import {user} from './user'

export interface UserState{
    user: Array<user> | []
    loading: boolean
    error: string | null
}




export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}


interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS,
    payload?: null
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: Array<any>
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUsersAction | FetchUserSuccessAction | FetchUsersErrorAction