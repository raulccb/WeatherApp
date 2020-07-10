import axios from 'axios'
import Constants from '../utils/Constants'

const apiClient = axios.create({
    baseURL: Constants.weather.baseUrl,
    headers: {
        Accept: 'application/json',
    }
})

export { apiClient }