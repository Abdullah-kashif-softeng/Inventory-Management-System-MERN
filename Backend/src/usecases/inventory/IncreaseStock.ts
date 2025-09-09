// usecases/IncreaseStock.ts
import { MongoInventoryRepository } from "../../repositories/mongo/MongoInventoryRepository";

import { Inventory } from "../../domain/Inventory";

export class IncreaseStock {
  constructor(private repo: MongoInventoryRepository) {}

  async execute(id: string, amount: number) {
    if (amount <= 0) throw new Error("Increase amount must be positive");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Inventory not found");

    const entity = new Inventory(existing);
    entity.increase(amount);

    return await this.repo.update({ ...entity, id });
  }
}
