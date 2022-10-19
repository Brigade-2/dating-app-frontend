const id : string | null = localStorage.getItem('id');
const auth = (localStorage.getItem('auth') === 'true');


const initialState: IdState = {
    id: Number(id),
    auth: auth
}

export enum MyIdActionTypes{
    USER_ID_SUCCESS = "USER_ID_SUCCESS",
    USER_ID_LOGOUT = "USER_ID_LOGOUT"
}

interface IdActionSuccess {
    type: MyIdActionTypes.USER_ID_SUCCESS
    payload: number
}

interface IdActionLogout {
    type: MyIdActionTypes.USER_ID_LOGOUT
    payload?: null
}

export type IdAction = IdActionSuccess | IdActionLogout


interface IdState {
    id: number | null
    auth: boolean
}

//Посмотреть по христиански ли в редюсер пихать localstorage
export const IdReducer = (state = initialState, action: IdAction):IdState => {
    switch (action.type){
        case MyIdActionTypes.USER_ID_SUCCESS:
            localStorage.setItem("id", String(action.payload))
            localStorage.setItem("auth", "true")
            return {id: action.payload, auth:true}
        case MyIdActionTypes.USER_ID_LOGOUT:
            localStorage.clear()
            return {id: null, auth: false}
        default:
            return {...state}
    }
}