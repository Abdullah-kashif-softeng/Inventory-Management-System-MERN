// src/usecases/inventory/UpdateInventory.ts
import { MongoInventoryRepository } from "../../repositories/mongo/MongoInventoryRepository";
import { Inventory, InventoryType } from "../../domain/Inventory";

export class UpdateInventory {
  constructor(private repo: MongoInventoryRepository) {}

  async execute(data: InventoryType) {
    if (!data.id) throw new Error("Inventory ID is required");

    const existing = await this.repo.findById(data.id);
    if (!existing) throw new Error("Inventory not found");

    // If shopID is being updated, validate it's not empty
    if (data.shopID !== undefined && !data.shopID.trim()) {
      throw new Error("Shop ID cannot be empty");
    }

    // Merge old and new data
    const entity = new Inventory({ ...existing, ...data });
    return await this.repo.update(entity);
  }
}
