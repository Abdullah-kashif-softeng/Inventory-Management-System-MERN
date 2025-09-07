// src/usecases/inventory/FindAllInventories.ts
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { InventoryType } from "../../domain/Inventory";

export class FindAllInventories {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(): Promise<InventoryType[]> {
    return this.inventoryRepo.findAll();
  }
}
