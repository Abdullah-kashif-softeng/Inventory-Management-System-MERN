import { IWarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import { WarehouseType } from "../../domain/Warehouse";

export class GetWarehouse {
  constructor(private repo: IWarehouseRepository) {}

  async execute(id: string): Promise<WarehouseType | null> {
    if (!id) throw new Error("Warehouse ID is required");
    return await this.repo.findById(id);
  }
}
