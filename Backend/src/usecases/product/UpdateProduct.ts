import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { Product, ProductType } from "../../domain/Product";

export class UpdateProduct {
  constructor(private repo: ProductRepository) {}

  async execute(id: string, data: ProductType) {
    if (!id) throw new Error("Product ID is required");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Product not found");

    const entity = new Product({ ...existing, ...data });
    return await this.repo.update(id, entity);
  }
}
