// src/usecases/product/CreateProduct.ts
import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType, Product } from "../../domain/Product";

export class CreateProduct {
  constructor(private repo: ProductRepository) {}

  async execute(data: ProductType):Promise<ProductType> {
    const entity = new Product(data);
    return await this.repo.create(entity);
  }
}
