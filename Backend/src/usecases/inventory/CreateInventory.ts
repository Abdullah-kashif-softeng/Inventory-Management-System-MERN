// src/usecases/inventory/CreateInventory.ts
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { InventoryType } from "../../domain/Inventory";

export class CreateInventory {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(inventory: InventoryType): Promise<InventoryType> {
    return this.inventoryRepo.create(inventory);
  }
}
