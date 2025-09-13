// usecases/CheckReorder.ts


import { Inventory } from "../../domain/Inventory";
import { IInventoryRepository } from '../../repositories/interfaces/IInventoryRepositry';

export class CheckReorder {
  constructor(private repo: IInventoryRepository) {}

  async execute(id: string): Promise<boolean> {
    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Inventory not found");

    const entity = new Inventory(existing);
    return entity.needsReorder();
  }
}
