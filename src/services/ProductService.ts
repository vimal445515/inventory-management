import { inject, injectable } from "tsyringe";
import { ProductRepository } from "../repositories/productRepository";
import { Product } from "../../generated/prisma/client";
import { IProductService, ProductRequest } from "../modles/IProductService";

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(ProductRepository) private productRepository: ProductRepository,
  ) {}
  async createProduct(product: any): Promise<Product> {
    return this.productRepository.create(product);
  }

  async getProduct(): Promise<Readonly<Product[]>> {
    return this.productRepository.findAll();
  }
}
