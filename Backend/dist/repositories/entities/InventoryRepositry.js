"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryInventoryRepository = void 0;
class InMemoryInventoryRepository {
    constructor() {
        this.inventories = [];
    }
    async create(inventory) {
        this.inventories.push(inventory);
        return inventory;
    }
    async update(inventory) {
        const index = this.inventories.findIndex(i => i.inventoryID === inventory.inventoryID);
        if (index === -1)
            throw new Error("Inventory not found");
        this.inventories[index] = inventory;
        return inventory;
    }
    async delete(inventoryID) {
        this.inventories = this.inventories.filter(i => i.inventoryID !== inventoryID);
    }
    async findById(inventoryID) {
        const inventory = this.inventories.find(i => i.inventoryID === inventoryID);
        return inventory || null;
    }
    async findAll() {
        return this.inventories;
    }
    async findByProduct(productID) {
        return this.inventories.filter(i => i.productID === productID);
    }
    async findByWarehouse(warehouseID) {
        return this.inventories.filter(i => i.warehouseID === warehouseID);
    }
    async adjustQuantity(inventoryID, quantity) {
        const inventory = this.inventories.find(i => i.inventoryID === inventoryID);
        if (!inventory)
            throw new Error("Inventory not found");
        inventory.quantityAvailable += quantity;
        if (inventory.quantityAvailable < 0) {
            inventory.quantityAvailable = 0;
        }
        return inventory;
    }
}
exports.InMemoryInventoryRepository = InMemoryInventoryRepository;
//# sourceMappingURL=InventoryRepositry.js.map