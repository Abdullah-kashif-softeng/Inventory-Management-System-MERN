import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";

export class GetAllProducts {
  constructor(private productRepo: ProductRepository) {}

  async execute(): Promise<ProductType[]> {
    return this.productRepo.findAll();
  }
}
