// src/usecases/inventory/DeleteInventory.ts
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";

export class DeleteInventory {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(inventoryID: number): Promise<void> {
    return this.inventoryRepo.delete(inventoryID);
  }
}
