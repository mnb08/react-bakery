import axios from 'axios'

const instanse = axios.create({
    baseURL: 'http://localhost:9999'
})

export default instanse