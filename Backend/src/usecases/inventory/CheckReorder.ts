// usecases/CheckReorder.ts
import { MongoInventoryRepository } from "../../repositories/mongo/MongoInventoryRepository";

import { Inventory } from "../../domain/Inventory";

export class CheckReorder {
  constructor(private repo: MongoInventoryRepository) {}

  async execute(id: string): Promise<boolean> {
    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Inventory not found");

    const entity = new Inventory(existing);
    return entity.needsReorder();
  }
}
