import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProductService } from "../services/ProductService";

export class ProductController {
  async create(req: Request, res: Response) {
    console.log(req.body);
    try {
      const productService = container.resolve(ProductService);

      const product = await productService.createProduct(req.body);

      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ type: "error", message: "server side error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const productService = container.resolve(ProductService);
      const products = await productService.getProduct();
      res.status(200).json({ products: products });
    } catch (error) {
      console.log(error);
      res.status(500).json({ type: "error", message: "server side error" });
    }
  }
}
