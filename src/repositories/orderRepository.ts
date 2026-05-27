import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { IOrderRepository,OrderWithRelations} from "../modles/IOrderRepository";
import { Order } from "../../generated/prisma/client";


@injectable()
export class OrderRepository implements IOrderRepository<Order> {
  async create(data: Order): Promise<Order> {
    return prisma.order.create({ data });
  }
  async getAll(): Promise<OrderWithRelations[]> {
    return prisma.order.findMany({ include: { user: true, product: true } });
  }
}
