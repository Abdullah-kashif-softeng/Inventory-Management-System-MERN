import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { Product } from "../../domain/Product";

export class RenameProduct {
  constructor(private repo: ProductRepository) {}

  async execute(id: string, newName: string) {
    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Product not found");

    const entity = new Product(existing);
    entity.rename(newName);
    return await this.repo.update(id, entity);
  }
}
