import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
export class DeleteProduct {
  constructor(private productRepo: ProductRepository) {}
  async execute(id: string): Promise<void> {
    return this.productRepo.delete(id);
  }
}