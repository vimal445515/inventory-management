import { Request, Response } from "express";
import { container } from "tsyringe";
import { OrderService } from "../services/orderService";

export class OrderController {
  async create(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const order = await orderService.createOrder(req.body);

      res.status(201).json(order);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        res.status(500).json({ type: "error", message: error.message });
      }
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const orders = await orderService.getOrder();
      res.status(200).json(orders);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ type: "error", message: error.message });
      }
    }
  }
}
