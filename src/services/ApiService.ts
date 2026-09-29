import axios from 'axios'

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL
const CORS_PROXY_URL = 'https://cors-proxy.lifeisgym.workers.dev'

const ApiService = {
  apiInstance: axios.create({
    baseURL: `${BASE_API_URL}/encyclopedia/en`,
  }),
}

ApiService.apiInstance.interceptors.request.use((config) => {
  if (import.meta.env.PROD && config.baseURL && config.url) {
    const fullUrl = `${config.baseURL.replace(/\/$/, '')}/${config.url.replace(/^\//, '')}`

    config.baseURL = ''
    config.url = `${CORS_PROXY_URL}/?url=${encodeURIComponent(fullUrl)}`
  }
  return config
})

ApiService.apiInstance.interceptors.response.use((response) => {
  return response.data
})

export default ApiService
