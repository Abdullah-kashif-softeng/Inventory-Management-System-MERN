// src/usecases/warehouse/UpdateWarehouse.ts
import { WarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import { WarehouseType } from "../../domain/Warehouse";

export class UpdateWarehouse {
  constructor(private warehouseRepo: WarehouseRepository) {}

  async execute(warehouse: WarehouseType): Promise<WarehouseType> {
    return this.warehouseRepo.update(warehouse);
  }
}
