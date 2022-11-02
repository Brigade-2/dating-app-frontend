
type match = {
    id: number
    match: Array<number>
}

export interface MatchIdState{
    match: match | null
    loading: boolean
    error: string | null
}




export enum MatchIdActionTypes {
    FETCH_MATCHS_ID = "FETCH_MATCHS_ID",
    FETCH_MATCHS_ID_SUCCESS = "FETCH_MATCHS_ID_SUCCESS",
    FETCH_MATCHS_ID_ERROR = "FETCH_MATCHS_ID_ERROR"
}


interface FetchMatchIdAction {
    type: MatchIdActionTypes.FETCH_MATCHS_ID,
    payload?: null
}

interface FetchMatchIdSuccessAction {
    type: MatchIdActionTypes.FETCH_MATCHS_ID_SUCCESS,
    payload: match
}

interface FetchMatchIdErrorAction {
    type: MatchIdActionTypes.FETCH_MATCHS_ID_ERROR,
    payload: string
}

export type MatchIdAction = FetchMatchIdAction | FetchMatchIdSuccessAction | FetchMatchIdErrorAction