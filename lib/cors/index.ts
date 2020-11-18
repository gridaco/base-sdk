import Axios from "axios";

export const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/"

export const corsAxios = Axios.create({
    baseURL: CORS_ANYWHERE
})