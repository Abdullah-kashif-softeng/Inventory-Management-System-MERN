

import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";

export class FindProductById {
  constructor(private productRepo: ProductRepository) {}

  async execute(productID: number): Promise<ProductType | null> {
    return this.productRepo.findById(productID);
  }
}
