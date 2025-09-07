import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { InventoryType } from "../../domain/Inventory";

export class FindInventoryByProduct {
  constructor(private inventoryRepo: InventoryRepository) {}

  async execute(productID: number): Promise<InventoryType[]> {
    return this.inventoryRepo.findByProduct(productID);
  }
}