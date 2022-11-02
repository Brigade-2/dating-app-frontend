import {combineReducers} from "redux"
import {UserReducer} from "./user";
import {UserIdReducer} from "./userId";
import {IdReducer} from "./id";
import {MatchIdReducer} from "./match";

export const rootReducer = combineReducers({
    user: UserReducer,
    useId: UserIdReducer,
    id: IdReducer,
    match: MatchIdReducer
})

export type RootState = ReturnType<typeof rootReducer>