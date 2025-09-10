import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";

export class GetProduct {
  constructor(private repo: ProductRepository) {}

  async execute(id: string) {
    return await this.repo.findById(id);
  }
}