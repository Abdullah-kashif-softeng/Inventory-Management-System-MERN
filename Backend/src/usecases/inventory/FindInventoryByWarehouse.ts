// src/usecases/inventory/FindInventoryByWarehouse.ts
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { InventoryType } from "../../domain/Inventory";

export class FindInventoryByWarehouse {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(warehouseID: number): Promise<InventoryType[]> {
    return this.inventoryRepo.findByWarehouse(warehouseID);
  }
}
