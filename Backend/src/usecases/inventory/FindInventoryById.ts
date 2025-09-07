// src/usecases/inventory/FindInventoryById.ts
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { InventoryType } from "../../domain/Inventory";

export class FindInventoryById {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(inventoryID: number): Promise<InventoryType | null> {
    return this.inventoryRepo.findById(inventoryID);
  }
}
