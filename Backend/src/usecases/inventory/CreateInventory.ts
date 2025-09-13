// usecases/CreateInventory.ts

import { Inventory, InventoryType } from "../../domain/Inventory";
import { IInventoryRepository } from '../../repositories/interfaces/IInventoryRepositry';

export class CreateInventory {
  constructor(private repo: IInventoryRepository) {}

  async execute(data: InventoryType) {
    if (!data.shopID) throw new Error("Shop ID is required");
    if (data.quantityAvailable < 0) throw new Error("Quantity cannot be negative");

    const entity = new Inventory(data);
    return await this.repo.create(entity);
  }
}
