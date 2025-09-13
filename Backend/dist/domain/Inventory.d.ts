export interface InventoryType {
    inventoryID: number;
    quantityAvailable: number;
    minimumStockLevel: number;
    maximumStockLevel: number;
    reorderPoint: number;
    productID: number | undefined;
    warehouseID: number | undefined;
    shopID: number;
}
export declare class Inventory implements InventoryType {
    inventoryID: number;
    quantityAvailable: number;
    minimumStockLevel: number;
    maximumStockLevel: number;
    reorderPoint: number;
    productID: number | undefined;
    warehouseID: number | undefined;
    shopID: number;
    constructor(data: InventoryType);
    increaseQuantity(amount: number): void;
    decreaseQuantity(amount: number): void;
    needsReorder(): boolean;
    isStockLow(): boolean;
    isStockFull(): boolean;
}
//# sourceMappingURL=Inventory.d.ts.map