import { Product } from "../../generated/prisma/client";

export interface ProductRequest {
  name: string;
  price: number;
  stock: number;
}

export interface IProductService {
  createProduct(product: ProductRequest): Promise<Product>;
  getProduct(): Promise<Readonly<Product[]>>;
}
