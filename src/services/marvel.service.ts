import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = (name?:string) => {
    return new Promise((resolve:any, reject:any) => {
        try{
            setTimeout(() => {
                let data = [1,2,3,4];
                resolve(data);
            },1500)
        }catch(e){
            reject(e)
        }
    })
}

/**
 * Get characters from marvel api
 * @params name
 * @return
 */
export const getCharacters = createAsyncThunk(
    'marvel/getCharacters',
    async (name?:string) => {
        const resp = await fetchData()
        return resp;
    }
);

/**
 * Get comics from marvel api
 * @params name
 * @returns Promise
 */
export const getComics = (title?:string) => {
    //
}


/**
 * Get series from marvel api
 * @params name
 * @returns Promise
 */
export const getSeries = (title?:string) => {
    //
}


/**
 * Get stories from marvel api
 * @params name
 * @returns Promise
 */
export const getStories = (title?:string) => {
    //
}

