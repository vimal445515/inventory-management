import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { IRepository } from "../modles/IRepository";
import { Product } from "../../generated/prisma/client";

@injectable()
export class ProductRepository implements IRepository<Product> {
  async create(data: Product): Promise<Product> {
    return prisma.product.create({ data });
  }

  async findAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }
  async getOne(productId: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id: productId } });
  }

  async updateStock(productId: number, stock: number): Promise<void> {
    console.log(productId)
    await prisma.product.update({ where: { id: productId }, data: { stock: {
                decrement: stock
            }} });
  }
}
 