import { InventoryType } from "../../domain/Inventory";
export interface InventoryRepository {
    create(inventory: InventoryType): Promise<InventoryType>;
    update(inventory: InventoryType): Promise<InventoryType>;
    delete(inventoryID: number): Promise<void>;
    findById(inventoryID: number): Promise<InventoryType | null>;
    findAll(): Promise<InventoryType[]>;
    findByProduct(productID: number): Promise<InventoryType[]>;
    findByWarehouse(warehouseID: number): Promise<InventoryType[]>;
    adjustQuantity(inventoryID: number, quantity: number): Promise<InventoryType>;
}
//# sourceMappingURL=IInventoryRepositry.d.ts.map