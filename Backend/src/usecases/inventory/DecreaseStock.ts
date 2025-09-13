// usecases/DecreaseStock.ts
import { IInventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";

import { Inventory } from "../../domain/Inventory";

export class DecreaseStock {
  constructor(private repo:   IInventoryRepository) {}

  async execute(id: string, amount: number) {
    if (amount <= 0) throw new Error("Decrease amount must be positive");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Inventory not found");

    const entity = new Inventory(existing);
    entity.decrease(amount);

    return await this.repo.update(id,entity);
  }
}
