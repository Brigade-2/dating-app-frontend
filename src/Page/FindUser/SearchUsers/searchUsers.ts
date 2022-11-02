import {user} from "../../../types/user";

declare global {
    interface Array<T> {
        filterTeg<T>(this: T[], teg: Array<T>): boolean;
    }
}

Array.prototype.filterTeg= function<T>( this: T[], teg : Array<T>) : boolean {
    for (let i = 0; i < teg.length; i++) {
        if (!this.includes(teg[i])) {
            return false;
        }
    }
    return true;
};


export const filterTegUsers = (state: Array<user>, teg : Array<string>) : Array<user> =>  {
    let stateFilter = state.filter( user => user.tags.filterTeg(teg))
    return stateFilter

}

