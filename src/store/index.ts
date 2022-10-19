import {applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk";
import {rootReducer} from "./Redusers";



export const store = createStore(rootReducer, applyMiddleware(thunk));