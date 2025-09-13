import { IInventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { Inventory, InventoryType } from "../../domain/Inventory";

export class UpdateInventory {
  constructor(private repo: IInventoryRepository) {}

  async execute(id: string, data: InventoryType) {
    if (!id) throw new Error("Inventory ID is required");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Inventory not found");

    const entity = new Inventory({ ...existing, ...data });
    return await this.repo.update(id, entity);
  }
}
