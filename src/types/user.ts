export type user  = {
    id: number,
    email?: string,
    name: string,
    login?: string,
    password?: string,
    preffered_gender?: string,
    preffered_age_start?: number,
    preffered_age_end?: number,
    tags:Array<string>,
    location: string,
    photo: Array<string>
}

