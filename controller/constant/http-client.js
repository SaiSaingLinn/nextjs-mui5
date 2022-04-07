import axios from "axios";
import { authStore } from "service";

const client = axios.create()
 
client.interceptors.request.use(async (config) => {
  
  config.baseURL = config.code === 'my' ? process.env.NEXT_PUBLIC_BASE_URL_MY : process.env.NEXT_PUBLIC_BASE_URL_EN
  config.headers['Authorization'] = `${authStore.getAuth()?.token ? `Bearer ${authStore.getAuth()?.token}` : ''}`
  
  return config
}, (error) => {
  return Promise.reject(error)
})

client.interceptors.response.use(async (response) => {
  if (!response.data) {
    return Promise.reject(response)
  }
  return response
}, async (error) => {
  return Promise.reject(error.response)
})

export default client;