import axios from 'axios'

const  axiosLocal   = axios.create({
    baseURL: 'http://rastreamento.ns2online.com.br/search/'
})

const  axiosCorreios   = axios.create({
    baseURL: 'http://rastreamento.ns2online.com.br/search/'
})

export default ( axiosLocal, axiosCorreios)