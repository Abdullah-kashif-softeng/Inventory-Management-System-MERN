// usecases/IncreaseStock.ts


import { Inventory } from "../../domain/Inventory";
import { IInventoryRepository } from '../../repositories/interfaces/IInventoryRepositry';

export class IncreaseStock {
  constructor(private repo: IInventoryRepository) {}

  async execute(id: string, amount: number) {
    if (amount <= 0) throw new Error("Increase amount must be positive");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Inventory not found");

    const entity = new Inventory(existing);
    entity.increase(amount);

    return await this.repo.update(id,entity);
  }
}
