import { inject, injectable } from "tsyringe";
import { OrderRepository } from "../repositories/orderRepository";
import { IOrderService } from "../modles/IOrderService";
import { Order } from "../../generated/prisma/client";
import { ProductRepository } from "../repositories/productRepository";
import { OrderWithRelations } from "../modles/IOrderRepository";
import { calculateTotal, checkPassword } from "../utils/orderHelper";
import { UserRepository } from "../repositories/userRepository";

@injectable()
export class OrderService implements IOrderService {
  constructor(
    @inject(OrderRepository) private orderRepository: OrderRepository,
    @inject(ProductRepository) private productRepository: ProductRepository,
    private userRepository: UserRepository,
  ) {}

  async createOrder(data: any): Promise<Order> {
    const product = await this.productRepository.getOne(
      data.productId as number,
    );
    const user = await this.userRepository.findOne(data.userId);
    if (!user) throw new Error("User not found");
    if (product && product.stock < data.quantity)
      throw new Error("Out of stock");

    const stock = product ? product.stock : 0;
    if (!product) throw new Error("product not found!");
    await this.productRepository.updateStock(data.productId, data.quantity);
    data.totalPrice = calculateTotal(product.price, data.quantity);
    return this.orderRepository.create(data);
  }

  async getOrder(): Promise<Readonly<OrderWithRelations[]>> {
    return this.orderRepository.getAll();
  }
}
