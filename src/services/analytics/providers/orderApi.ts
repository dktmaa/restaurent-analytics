import request from "request-promise"
import config from '../../../../config/config'
import { Order } from "../interfaces"

const baseUrl = config.ORDER_API

export const  getOrdersByDate = async (orderDate: string) => {
    const requestUrl = `${baseUrl}/order?orderDate=${orderDate}`
    const response = await request(requestUrl)
    return JSON.parse(response) as Order[]
}