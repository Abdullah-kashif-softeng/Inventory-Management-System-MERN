// src/controllers/ProductController.ts
import { Request, Response } from "express";
import { ProductRepository } from "../repositories/interfaces/IProductRepositry";

import { CreateProduct } from "../usecases/product/CreateProduct";
import { UpdateProduct } from "../usecases/product/UpdateProduct";
import { DeleteProduct } from "../usecases/product/DeleteProduct";
import { GetProduct } from "../usecases/product/GetProduct";
import { GetAllProducts } from "../usecases/product/GetAllProducts";

import { normalizeProduct } from "../utils/normalizers";

export class ProductController {
  constructor(private repo: ProductRepository) {}

  async create(req: Request, res: Response) {
    try {
      const usecase = new CreateProduct(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(normalizeProduct(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const usecase = new UpdateProduct(this.repo);
      const result = await usecase.execute({
        ...req.body,
        productID: req.params.id,
      });
      res.json(normalizeProduct(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Product ID is required");

      const usecase = new DeleteProduct(this.repo);
      await usecase.execute(id);
      res.json({ message: "Deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Product ID is required");

      const usecase = new GetProduct(this.repo);
      const result = await usecase.execute(id);
      res.json(result ? normalizeProduct(result) : null);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const usecase = new GetAllProducts(this.repo);
      const result = await usecase.execute();
      res.json(result.map(normalizeProduct));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
