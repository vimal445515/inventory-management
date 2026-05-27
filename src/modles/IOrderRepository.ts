import { Prisma } from "../../generated/prisma/client";

export type OrderWithRelations = Prisma.OrderGetPayload<{
  include: {
    user: true;
    product: true;
  };
}>;
export interface IOrderRepository<T> {
  create(data: T): Promise<T>;
  getAll(): Promise<OrderWithRelations[]>;
}
