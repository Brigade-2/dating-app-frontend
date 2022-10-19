import * as UserActionCreator from "./user"
import * as UserIdActionCreator from "./userId";


export default {
    ...UserActionCreator,
    ...UserIdActionCreator
}