import cloudBase from '@cloudbase/js-sdk'
import config from '../config/index'

interface INotData<T> {
    apiName: string
    funcName: string
    param: T
}
interface IData<T> {
    moduleName: string
    serviceName: string
    funcName: string
    param: T
}

// request
interface ICallFunctionOptions<T> {
    name: string
    data: IData<T> | INotData<T>
    query?: Record<string, any>
    search?: string
    parse?: boolean
}

// response
interface ICallFunctionResponse<K> {
    requestId: string
    data?: { response_data?: string }
    result?: {
        msg: string
        data: K | string
        errorCode: number
        success: boolean
    }
}

const options: cloudBase.ICloudbaseConfig = {
    region: config.REGION,
    env: import.meta.env.VITE_CLOUD_ENV,
}

const app: cloudBase.app.App = cloudBase.init(options)

export function request<T, K>(params: ICallFunctionOptions<T>): Promise<ICallFunctionResponse<K>> {
    // 请求拦截
    // 登陆拦截
    // reportLog(params)
    return new Promise((resolve, reject) => {
        app.callFunction(params)
            .then((result: ICallFunctionResponse<K>) => {
                // 响应拦截
                console.log('request-and-response', {
                    params,
                    result,
                })
                resolve(result)
            })
            .catch((error) => reject(error))
    })
}