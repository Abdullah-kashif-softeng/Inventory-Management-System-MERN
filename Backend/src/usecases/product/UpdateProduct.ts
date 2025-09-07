// src/usecases/product/UpdateProduct.ts

import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";

export class UpdateProduct {
  constructor(private productRepo: ProductRepository) {}

  async execute(product: ProductType): Promise<ProductType> {
    return this.productRepo.update(product);
  }
}
