import { IWarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import { Warehouse } from "../../domain/Warehouse";

export class RenameWarehouse {
  constructor(private repo: IWarehouseRepository) {}

  async execute(id: string, newName: string) {
    if (!id) throw new Error("Warehouse ID is required");
    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Warehouse not found");

    const entity = new Warehouse(existing);
    entity.rename(newName); // ✅ domain behavior
    return await this.repo.update(id, entity);
  }
}
