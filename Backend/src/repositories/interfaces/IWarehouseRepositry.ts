import { WarehouseType } from "../../domain/Warehouse";

export interface IWarehouseRepository {
  create(warehouse: WarehouseType): Promise<WarehouseType>;
  update(id:string, warehouse: WarehouseType): Promise<WarehouseType>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<WarehouseType | null>;
  findAll(): Promise<WarehouseType[]>;
}
