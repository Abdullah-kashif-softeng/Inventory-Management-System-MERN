// src/usecases/product/UpdateProduct.ts


import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType,Product } from "../../domain/Product";

export class UpdateProduct {
  constructor(private repo: ProductRepository) {}

  async execute(data: ProductType) {
    if (!data.productID) throw new Error("Product ID is required");
    const entity = new Product(data);
    return await this.repo.update(entity);
  }
}