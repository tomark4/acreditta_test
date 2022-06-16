import md5 from 'blueimp-md5';

/**
 * Generate auth credentials for marvel api
 * @returns string
 */
export const apiMarvelAuthCredentials = () => {
    const ts = new Date().getTime();
    const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY || "";
    const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY || "";
    const hash = md5(ts+PRIVATE_KEY+PUBLIC_KEY);
    return `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
}