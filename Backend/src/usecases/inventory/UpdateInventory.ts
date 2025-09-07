// src/usecases/inventory/UpdateInventory.ts
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { InventoryType } from "../../domain/Inventory";

export class UpdateInventory {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(inventory: InventoryType): Promise<InventoryType> {
    return this.inventoryRepo.update(inventory);
  }
}
