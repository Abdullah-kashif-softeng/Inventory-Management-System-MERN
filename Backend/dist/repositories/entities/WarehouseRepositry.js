"use strict";
// src/repositories/WarehouseRepositoryImpl.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryWarehouseRepository = void 0;
class InMemoryWarehouseRepository {
    constructor() {
        this.warehouses = [];
    }
    async create(warehouse) {
        this.warehouses.push(warehouse);
        return warehouse;
    }
    async update(warehouse) {
        const index = this.warehouses.findIndex(w => w.warehouseID === warehouse.warehouseID);
        if (index === -1)
            throw new Error("Warehouse not found");
        this.warehouses[index] = warehouse;
        return warehouse;
    }
    async delete(warehouseID) {
        this.warehouses = this.warehouses.filter(w => w.warehouseID !== warehouseID);
    }
    async findById(warehouseID) {
        const warehouse = this.warehouses.find(w => w.warehouseID === warehouseID);
        return warehouse || null;
    }
    async findAll() {
        return this.warehouses;
    }
}
exports.InMemoryWarehouseRepository = InMemoryWarehouseRepository;
//# sourceMappingURL=WarehouseRepositry.js.map