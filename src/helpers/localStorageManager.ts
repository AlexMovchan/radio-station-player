import { curry } from "ramda";

export const saveToLocalStorage = curry((key: string, data: string) => window.localStorage.setItem(key, data));
export const getFromLocalStorage = (key: string) => window.localStorage.getItem(key);

export default { saveToLocalStorage, getFromLocalStorage };
