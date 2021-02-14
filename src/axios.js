import axios from "axios";


const instance = axios.create({
    // baseURL:"https://aftergraduation.herokuapp.com/"
    baseURL:"http://localhost:8080"
})

export default instance;