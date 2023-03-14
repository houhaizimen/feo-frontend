import axios, { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios'
import { API_BASE_URL } from '@/config'

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 6000
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const customHeaders: AxiosRequestHeaders = {
    ...config.headers
  }
  if (config.method === 'post') {
    customHeaders['Content-Type'] = 'application/json'
  }
  config.headers = customHeaders
  return config
}, (error: Error) => {
  console.log(error)
})

instance.interceptors.response.use(function (response: AxiosResponse) {
  const data = response.data
    return data
}, function (error) {
  return Promise.reject(error)
})

interface responseTypes<T>{
  code: number
  msg: string
  result: T
}

const requestHandler = <T>(method: 'get' | 'post', url: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<T> => {
  let response: Promise<responseTypes<T>>
  switch (method) {
    case 'get':
      response = instance.get(url, { params: { ...params }, ...config })
      break
    case 'post':
      response = instance.post(url, { ...params }, { ...config })
      break
  }
  return new Promise<any>((resolve, reject) => {
    response.then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const request = {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('get', url, params, config),
  post: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('post', url, params, config)
}
