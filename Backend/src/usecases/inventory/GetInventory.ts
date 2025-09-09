// usecases/GetInventory.ts
import { MongoInventoryRepository } from "../../repositories/mongo/MongoInventoryRepository";


export class GetInventory {
  constructor(private repo: MongoInventoryRepository) {}

  async execute(id: string) {
    if (!id) throw new Error("Inventory ID is required");
    return await this.repo.findById(id);
  }
}
