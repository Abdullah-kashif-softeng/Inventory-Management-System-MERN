import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
export class DeleteProduct {
  constructor(private productRepo: ProductRepository) {}
  async execute(productID: number): Promise<void> {
    return this.productRepo.delete(productID);
  }
}