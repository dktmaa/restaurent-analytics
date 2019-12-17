import { Types } from 'mongoose'

export interface Order{
    userId: string 
    items:  [Items],
    restaurentId: string,
    totalAmount: string
}
export interface Items{
    name: string,
    quantity: number, 
}



export interface Restaurent {
    _id: string | Types.ObjectId
    location: {
        type: string,
        coordinates: [number]
    },
    city: string,
    restaurentName: string,
    restaurentPhone: string,
    menues: [Menu],
    cousines: [string],

}


export interface Menu {
    name: string,
    price: string,
    isAvailable: boolean
}