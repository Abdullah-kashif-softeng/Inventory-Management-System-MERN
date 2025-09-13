import { IWarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";

export class DeleteWarehouse {
  constructor(private repo: IWarehouseRepository) {}

  async execute(id: string) {
    if (!id) throw new Error("Warehouse ID is required");
    return await this.repo.delete(id);
  }
}
