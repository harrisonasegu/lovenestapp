import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

const config = {
  baseURL: `${apiBaseUrl}/api/`
}

export const request = axios.create(config)
