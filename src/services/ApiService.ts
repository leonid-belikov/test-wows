import axios from 'axios'

const BASE_API_URL = '/api-vortex/api'

const ApiService = {
  apiInstance: axios.create({
    baseURL: `${BASE_API_URL}/encyclopedia/en`,
  }),
}

ApiService.apiInstance.interceptors.response.use((response) => {
  return response.data
})

export default ApiService
