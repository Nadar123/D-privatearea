import axios, { AxiosError } from 'axios'
import _ from 'lodash'
import { SERVER_URLS, Environment, WP_SERVER_URLS, API_ENDPOINTS } from '../constants/api.constant'

export default class AjaxService {
  static instance: AjaxService

  constructor() {
    if (AjaxService.instance) {
      return AjaxService.instance
    }
    AjaxService.instance = this
  }

  static getInstance = () => AjaxService.instance || new AjaxService()

  static getServerUrl = () => SERVER_URLS[process.env.NODE_ENV as Environment]

  static getWpUrl = () => WP_SERVER_URLS[process.env.NODE_ENV as Environment]

  static getWordpress = async (partialUrl: string): Promise<any> => {
    const completeUrl = AjaxService.getWpUrl() + partialUrl
    try {
      const res = await axios.get(completeUrl)
      return res
    } catch (error: any) {
      console.log(error)
    }
  }

  static formatParams = (p: Record<string, string | string[]>): Record<string, string | string[]> => {
    const ret: Record<string, string> = {}
    _.forIn(p, (v: string | string[], k: string) => {
      if (v instanceof Array) {
        ret[k] = _.reduce(v, (str: string, e: string) => (str === '' ? `${e}` : `${str},${e}`), '')
      } else {
        ret[k] = v
      }
    })
    return ret
  }

  static fetchJwt = () => {
    const token = localStorage.getItem('userToken')
    return token
  }

  get = async (partialUrl: string, params: Record<string, string | string[]> = {}): Promise<any> => {
    const jwt = AjaxService.fetchJwt()

    if (jwt === null) {
      return Promise.reject()
    }

    const headers = {
      Authorization: `Bearer ${jwt}`
    }

    const completeUrl = AjaxService.getServerUrl() + partialUrl
    const formattedParams = AjaxService.formatParams(params)
    try {
      const res = await axios.get(completeUrl, { headers, params: formattedParams })
      return res
    } catch (error: any) {
      return this.handleResponseError(error)
    }
  }

  post = async (partialUrl: string, data: Record<string, any> = {}): Promise<any> => {
    const jwt = AjaxService.fetchJwt()

    const headers = {
      Authorization: `Bearer ${jwt}`
    }

    const completeUrl = AjaxService.getServerUrl() + partialUrl
    try {
      const res = await axios.post(completeUrl, data, { headers })
      return res
    } catch (error: any) {
      return this.handleResponseError(error)
    }
  }

  put = async (partialUrl: string, data: Record<string, any> = {}): Promise<any> => {
    const jwt = AjaxService.fetchJwt()

    const headers = {
      Authorization: `Bearer ${jwt}`
    }

    const completeUrl = AjaxService.getServerUrl() + partialUrl
    try {
      const res = await axios.put(completeUrl, data, { headers })
      return res
    } catch (error: any) {
      return this.handleResponseError(error)
    }
  }

  handleResponseError = (error: AxiosError<any>) => {
    const apiError = {
      message: error.message,
      data: error?.response?.data,
      statusCode: error?.response?.status
    }
    return Promise.reject(apiError)
  }
}
