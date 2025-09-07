// src/usecases/warehouse/DeleteWarehouse.ts
import { WarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";

export class DeleteWarehouse {
  constructor(private warehouseRepo: WarehouseRepository) {}

  async execute(warehouseID: number): Promise<void> {
    return this.warehouseRepo.delete(warehouseID);
  }
}
