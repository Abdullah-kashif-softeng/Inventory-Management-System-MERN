// src/usecases/inventory/AdjustInventoryQuantity.ts
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { InventoryType } from "../../domain/Inventory";

export class AdjustInventoryQuantity {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(inventoryID: number, quantity: number): Promise<InventoryType> {
    return this.inventoryRepo.adjustQuantity(inventoryID, quantity);
  }
}
