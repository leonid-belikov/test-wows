import axios from 'axios'

const BASE_API_URL = 'https://vortex.worldofwarships.eu/api'

const ApiService = {
  apiInstance: axios.create({
    baseURL: `${BASE_API_URL}/encyclopedia/en`,
  }),
}

export default ApiService
