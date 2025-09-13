"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor(data) {
        if (data.inventoryID <= 0)
            throw new Error("Invalid Inventory ID");
        if (data.quantityAvailable < 0)
            throw new Error("Quantity cannot be negative");
        if (data.minimumStockLevel < 0)
            throw new Error("Minimum stock cannot be negative");
        if (data.maximumStockLevel < data.minimumStockLevel)
            throw new Error("Maximum stock must be greater than or equal to minimum stock");
        if (data.reorderPoint < data.minimumStockLevel)
            throw new Error("Reorder point must not be less than minimum stock");
        if (!data.shopID || data.shopID <= 0)
            throw new Error("Shop ID is required");
        this.inventoryID = data.inventoryID;
        this.quantityAvailable = data.quantityAvailable;
        this.minimumStockLevel = data.minimumStockLevel;
        this.maximumStockLevel = data.maximumStockLevel;
        this.reorderPoint = data.reorderPoint;
        this.productID = data.productID;
        this.warehouseID = data.warehouseID;
        this.shopID = data.shopID;
    }
    increaseQuantity(amount) {
        if (amount <= 0)
            throw new Error("Increase amount must be positive");
        if (this.quantityAvailable + amount > this.maximumStockLevel)
            throw new Error("Cannot exceed maximum stock level");
        this.quantityAvailable += amount;
    }
    decreaseQuantity(amount) {
        if (amount <= 0)
            throw new Error("Decrease amount must be positive");
        if (this.quantityAvailable - amount < 0)
            throw new Error("Cannot reduce below zero");
        this.quantityAvailable -= amount;
    }
    needsReorder() {
        return this.quantityAvailable <= this.reorderPoint;
    }
    isStockLow() {
        return this.quantityAvailable <= this.minimumStockLevel;
    }
    isStockFull() {
        return this.quantityAvailable >= this.maximumStockLevel;
    }
}
exports.Inventory = Inventory;
//# sourceMappingURL=Inventory.js.map