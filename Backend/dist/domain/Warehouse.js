"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
class Warehouse {
    constructor(data) {
        if (!data.warehouseName?.trim())
            throw new Error("Warehouse name required");
        if (data.warehouseName.length > 100)
            throw new Error("Name too long");
        if (data.warehouseID <= 0)
            throw new Error("Invalid warehouse ID");
        if (data.locationID !== undefined && data.locationID <= 0)
            throw new Error("Invalid location ID");
        this.isRefrigerated = data.isRefrigerated;
        this.warehouseName = data.warehouseName;
        this.warehouseID = data.warehouseID;
        this.locationID = data.locationID;
    }
    rename(newName) {
        if (!newName.trim())
            throw new Error("Name required");
        if (newName.length > 100)
            throw new Error("Name too long");
        this.warehouseName = newName;
    }
    moveToLocation(newLocationId) {
        if (newLocationId <= 0)
            throw new Error("Invalid location ID");
        this.locationID = newLocationId;
    }
}
exports.Warehouse = Warehouse;
//# sourceMappingURL=Warehouse.js.map