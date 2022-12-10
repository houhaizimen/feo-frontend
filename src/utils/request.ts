import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_BASE_URL } from '@/config'

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000
})

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // let customHeaders: AxiosRequestHeaders = null
  // config.headers = customHeaders
  // return config
}, (error: Error) => {
  console.log(error)
  Promise.reject(error)
})

axios.interceptors.response.use(function (response: AxiosResponse) {
  const data = response.data
  if(data.code !== 200){
    if(data.code == 401){
    }
    const e = JSON.stringify(data)
  }else{
    return data
  }
}, function (error) {
  return Promise.reject(error)
})

interface responseTypes<T>{
  code: number,
  msg: string,
  result: T
}

const requestHandler = <T>(method: 'get' | 'post', url: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<T> => {
  let response: Promise<responseTypes<T>>
  switch(method){
    case 'get':
      response = instance.get(url, {params: { ...params }, ...config});
      break;
    case 'post':
      response = instance.post(url, {...params}, {...config});
      break;
  }
  return new Promise<T>((resolve, reject) => {
    response.then(res => {
      // result data
      resolve(res.result)
    }).catch(error => {
      let e = JSON.stringify(error)
      reject(error)
    })
  })
}

export const request = {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('get', url, params, config),
  post: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('post', url, params, config)
}