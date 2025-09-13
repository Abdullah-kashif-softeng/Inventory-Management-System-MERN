import { IWarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import { WarehouseType, Warehouse } from "../../domain/Warehouse";

export class UpdateWarehouse {
  constructor(private repo: IWarehouseRepository) {}

  async execute(id:string, data: WarehouseType) {
    if (id) throw new Error("Warehouse ID is required");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Warehouse not found");

    const entity = new Warehouse({ ...existing, ...data });
    return await this.repo.update(id, entity);
  }
}
