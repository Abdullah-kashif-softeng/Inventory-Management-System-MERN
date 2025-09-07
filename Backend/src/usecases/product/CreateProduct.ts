import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";







export class CreateProduct {
  constructor(private productRepo: ProductRepository) {}

  async execute(product: ProductType): Promise<ProductType> {
    return this.productRepo.create(product);
  }
}







