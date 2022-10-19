import {combineReducers} from "redux"
import {UserReducer} from "./user";
import {UserIdReducer} from "./userId";
import {IdReducer} from "./id";

export const rootReducer = combineReducers({
    user: UserReducer,
    useId: UserIdReducer,
    id: IdReducer
})

export type RootState = ReturnType<typeof rootReducer>