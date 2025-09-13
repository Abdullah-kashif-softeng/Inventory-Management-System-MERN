import { InventoryType } from "../../domain/Inventory";
import { InventoryRepository } from "../interfaces/IInventoryRepositry";
export declare class InMemoryInventoryRepository implements InventoryRepository {
    private inventories;
    create(inventory: InventoryType): Promise<InventoryType>;
    update(inventory: InventoryType): Promise<InventoryType>;
    delete(inventoryID: number): Promise<void>;
    findById(inventoryID: number): Promise<InventoryType | null>;
    findAll(): Promise<InventoryType[]>;
    findByProduct(productID: number): Promise<InventoryType[]>;
    findByWarehouse(warehouseID: number): Promise<InventoryType[]>;
    adjustQuantity(inventoryID: number, quantity: number): Promise<InventoryType>;
}
//# sourceMappingURL=InventoryRepositry.d.ts.map