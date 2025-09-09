// usecases/DeleteInventory.ts
import { MongoInventoryRepository } from "../../repositories/mongo/MongoInventoryRepository";


export class DeleteInventory {
  constructor(private repo: MongoInventoryRepository) {}

  async execute(id: string) {
    if (!id) throw new Error("Inventory ID is required");

    return await this.repo.delete(id);
  }
}
