import { ACCESS_KEY } from "./api-constants"

export const MiddlewareConstants = {
    API_URL: 'http://data.fixer.io/api/latest',
    API_KEY: ACCESS_KEY,
    API_SYMBOLS: 'UAH,USD,EUR,GIP,PLN'
}

export const EXCHANGE_RATES_URL = `${MiddlewareConstants.API_URL}?access_key=${MiddlewareConstants.API_KEY}&symbols${MiddlewareConstants.API_SYMBOLS}`