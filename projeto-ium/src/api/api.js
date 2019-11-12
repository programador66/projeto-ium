import axios from "axios"

class API {
    constructor() {
        const api = axios.create({
            baseURL: `http://projeto-ium/api`,
            // baseURL: `https://aw-projeto-ium.herokuapp.com/api`
        });
        this.api = api;
    }   
}



export default API;