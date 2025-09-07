import { WarehouseType } from "../../domain/Warehouse";

export interface WarehouseRepository {
  create(warehouse: WarehouseType): Promise<WarehouseType>;
  update(warehouse: WarehouseType): Promise<WarehouseType>;
  delete(warehouseID: number): Promise<void>;
  findById(warehouseID: number): Promise<WarehouseType | null>;
  findAll(): Promise<WarehouseType[]>;
}