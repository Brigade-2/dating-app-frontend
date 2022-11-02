import {user} from "../types/user";
import {UserState} from "../types/userFormat";

declare global {
    interface Array<T> {
        filterTeg<T>(this: T[], teg: Array<T>): boolean;
    }
}

Array.prototype.filterTeg= function<T>( this: T[], teg : Array<T>) : boolean {
    for (let i = 0; i < teg.length; i++) {
        if (!this.includes(teg[i]) && teg[i] !== '') {
            return false;
        }
    }
    return true;
};

const useUserId = (user: Array<user>, id: number | null): user[] => {
    return user&& user.filter(user => user.id !== id)
}

export const useTegUsers = (state: Array<user>, id: number | null,  teg : Array<string>, city: string) : Array<user> =>  {
    let userID = useUserId(state, id)
    let stateFilter = userID.filter( user => user.tags.filterTeg(teg))
    if (city) stateFilter = stateFilter.filter(user => user.location === city)
    return stateFilter

}

