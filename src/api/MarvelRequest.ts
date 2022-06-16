import axios from "axios";

/**
 * config axios
 */

export const MarvelRequest = axios.create({
    baseURL:`https://gateway.marvel.com:443/v1/public`
});