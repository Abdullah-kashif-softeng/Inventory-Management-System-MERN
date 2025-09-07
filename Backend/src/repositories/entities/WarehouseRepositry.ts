// src/repositories/WarehouseRepositoryImpl.ts

import { WarehouseType } from "../../domain/Warehouse";
import { WarehouseRepository } from "../interfaces/IWarehouseRepositry";

export class InMemoryWarehouseRepository implements WarehouseRepository {
  private warehouses: WarehouseType[] = [];

  async create(warehouse: WarehouseType): Promise<WarehouseType> {
    this.warehouses.push(warehouse);
    return warehouse;
  }

  async update(warehouse: WarehouseType): Promise<WarehouseType> {
    const index = this.warehouses.findIndex(w => w.warehouseID === warehouse.warehouseID);
    if (index === -1) throw new Error("Warehouse not found");
    this.warehouses[index] = warehouse;
    return warehouse;
  }

  async delete(warehouseID: number): Promise<void> {
    this.warehouses = this.warehouses.filter(w => w.warehouseID !== warehouseID);
  }

  async findById(warehouseID: number): Promise<WarehouseType | null> {
    const warehouse = this.warehouses.find(w => w.warehouseID === warehouseID);
    return warehouse || null;
  }

  async findAll(): Promise<WarehouseType[]> {
    return this.warehouses;
  }
}
