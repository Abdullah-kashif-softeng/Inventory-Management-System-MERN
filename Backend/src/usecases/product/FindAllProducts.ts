// src/usecases/product/FindAllProducts.ts

import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";

export class FindAllProducts {
  constructor(private productRepo: ProductRepository) {}

  async execute(): Promise<ProductType[]> {
    return this.productRepo.findAll();
  }
}
