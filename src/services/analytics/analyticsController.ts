import { getRestaurentByCity } from "./providers/restaurentApi"
import { getOrdersByDate } from "./providers/orderApi"
import { Order, Restaurent } from "./interfaces"

// Return list of orders in a city on a given Date
export const getOrdersFromCity = async (city: string, date: string) => {
  
  const restaurents = await getRestaurentByCity(city)
  const orders = await getOrdersByDate(date)
  const restaurentIds = Array.from(restaurents).map( restaurent => restaurent._id)
  const result = Array.from(orders).filter(order => {
    if( restaurentIds.indexOf( order.restaurentId) === -1)
      return false
    return true
  })

  return result
}

// Returns list of restaurent in a given city
export const getRestaurentsFromCity = async (city: string) =>  {
  const restaurents = await getRestaurentByCity(city)
  return restaurents as Restaurent[]
}

// Returns the total order amount in a city on a given date
export const getTotalOrderAmoutByDate  = async (city: string, date: string) => {
  const restaurents = await getRestaurentByCity(city)
  const orders = await getOrdersByDate(date)
  const restaurentIds = restaurents.map( restaurent => restaurent._id)
  const result = orders.filter(order => {
    if( restaurentIds.indexOf( order.restaurentId) === -1)
      return false
    return true
  })
  const amounts  = result.map( result => Number(result.totalAmount))
  const totalAmount = amounts.reduce((totalAmount, orderAmount)=> totalAmount + orderAmount)
  return {
    totalAmount,
    date
  }
}