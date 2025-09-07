// src/usecases/warehouse/CreateWarehouse.ts
import { WarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import { WarehouseType } from "../../domain/Warehouse";

export class CreateWarehouse {
  constructor(private warehouseRepo: WarehouseRepository) {}

  async execute(warehouse: WarehouseType): Promise<WarehouseType> {
    return this.warehouseRepo.create(warehouse);
  }
}
