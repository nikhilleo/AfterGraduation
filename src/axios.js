import axios from "axios";


const instance = axios.create({
    baseURL:"https://aftergraduation.herokuapp.com/"
})

export default instance;