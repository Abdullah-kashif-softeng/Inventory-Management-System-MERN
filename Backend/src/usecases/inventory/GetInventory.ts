import { IInventoryRepository } from '../../repositories/interfaces/IInventoryRepositry';
// usecases/GetInventory.ts



export class GetInventory {
  constructor(private repo: IInventoryRepository) {}

  async execute(id: string) {
    if (!id) throw new Error("Inventory ID is required");
    return await this.repo.findById(id);
  }
}
