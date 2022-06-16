import { MarvelRequest } from "../api/MarvelRequest"
import { apiMarvelAuthCredentials } from "../helpers/marvel-api-auth";

const authCredentials = apiMarvelAuthCredentials()

/**
 * Get characters from marvel api
 * @params name
 * @return
 */
export const getCharacters = async (name?:string) => {
    let uri = `/characters?${authCredentials}`

    if(name){
        uri += `&nameStartsWith=${name}`
    }

    return await MarvelRequest.get(uri);
}


/**
 * Get comics from marvel api
 * @params name
 * @returns Promise
 */
export const getComics = async (title?:string) => {
    let uri = `/comics?${authCredentials}`

    if(title){
        uri += `&titleStartsWith=${title}`
    }

    return await MarvelRequest.get(uri);
}


/**
 * Get series from marvel api
 * @params name
 * @returns Promise
 */
export const getSeries = async (title?:string) => {
    let uri = `/series?${authCredentials}`

    if(title){
        uri += `&titleStartsWith=${title}`
    }

    return await MarvelRequest.get(uri);
}


/**
 * Get stories from marvel api
 * @params name
 * @returns Promise
 */
export const getStories = async (title?:string) => {
    let uri = `/stories?${authCredentials}`

    if(title){
        uri += `&titleStartsWith=${title}`
    }

    return await MarvelRequest.get(uri);
}

