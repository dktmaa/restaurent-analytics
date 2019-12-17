import { Request, Response } from "express";
import {  getOrdersFromCity, getTotalOrderAmoutByDate, getRestaurentsFromCity } from "./analyticsController";
import { Order } from "./interfaces";

export default [
  {
    path: "/api/v1/analytics/orders",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const {city, date} = req.query
        const result = await getOrdersFromCity(city, date)
        res.status(200).send(result);
      }
    ]
  },

  {
    path: "/api/v1/analytics/totalAmount",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const {city, date} = req.query
        const result = await getTotalOrderAmoutByDate(city, date)
        res.status(200).send(result);
      }
    ]
  },

  {
    path: "/api/v1/analytics/city",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
      const {city} = req.query
      const result = await getRestaurentsFromCity(city)
      res.status(200).send(result);
      }
    ]
  }
];
