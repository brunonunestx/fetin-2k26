import axios, { type AxiosRequestConfig } from 'axios'

const httpClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return httpClient.request<T>(config).then(({ data }) => data)
}
