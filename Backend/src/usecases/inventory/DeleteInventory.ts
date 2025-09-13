// usecases/DeleteInventory.ts
import { IInventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";


export class DeleteInventory {
  constructor(private repo: IInventoryRepository) {}

  async execute(id: string) {
    if (!id) throw new Error("Inventory ID is required");

    return await this.repo.delete(id);
  }
}
