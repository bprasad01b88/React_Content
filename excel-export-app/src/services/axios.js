import axios from "axios";
import config from "../config";
import { getLocalStorageToken } from "../utils"
const { API_BASE_URL } = config;
const client = axios.create();

client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const APIRequest = (endpoint, payload = {}, method = "get", headers = {}) => {
    const tokens = getLocalStorageToken();

    if(tokens){
        headers.tokens = tokens;
    }

    let axiosConfig = {
        method : method.toLowerCase()
    };

    if(endpoint !== "v1/sopos/Login/posLogin"){
        axiosConfig,headers = headers;
    }

    if(method === "get"){
        axiosConfig.params = payload;
    } else {
        axiosConfig.data = payload;
    }

    return client(`${API_BASE_URL}${endpoint}`, axiosConfig);
}

export default APIRequest;