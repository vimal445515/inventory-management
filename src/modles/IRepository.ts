import { Product } from "../../generated/prisma/client";
export interface IRepository<T> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  getOne(productId: number): Promise<Product | null>;
  updateStock(productId: number, stock: number): Promise<void>;
}
