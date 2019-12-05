import axios from "axios"

class API {
    constructor() {
        const api = axios.create({
            baseURL: `http://projeto-ium/api`,
            // baseURL: `http://aw-projeto-ium.herokuapp.com/api/`
        });
        this.api = api;
    }
    
    headerToken() {
        const token = JSON.parse(sessionStorage.getItem('usuario')).token;
        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json' 
            }
        }

        return config;
    }
}

export default API;