import { IWarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import { WarehouseType } from "../../domain/Warehouse";

export class GetAllWarehouses {
  constructor(private repo: IWarehouseRepository) {}

  async execute(): Promise<WarehouseType[]> {
    return await this.repo.findAll();
  }
}
