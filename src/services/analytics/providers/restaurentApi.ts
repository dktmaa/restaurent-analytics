import request from "request-promise"
import config from '../../../../config/config'
import { Restaurent } from "../interfaces"

const baseUrl = config.RESTAURENT_SEARCH_API

export const getRestaurentByCity = async (city: string) => {
    const requestUrl = `${baseUrl}/restaurent/search?cityName=${city}`
    const response = await request(requestUrl)
    return JSON.parse(response) as Restaurent[]
}