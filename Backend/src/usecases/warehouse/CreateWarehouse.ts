import { IWarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import { WarehouseType, Warehouse } from "../../domain/Warehouse";

export class CreateWarehouse {
  constructor(private repo: IWarehouseRepository) {}

  async execute(data: WarehouseType) {
    const entity = new Warehouse(data); // domain validation happens here
    return await this.repo.create(entity);
  }
}
