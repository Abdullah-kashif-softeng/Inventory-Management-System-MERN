import { InventoryType } from "../../domain/Inventory";

export interface InventoryRepository {
  create(inventory: InventoryType): Promise<InventoryType>;
  update(inventory: InventoryType): Promise<InventoryType>;
  delete(inventoryID: string): Promise<void>;
  findById(inventoryID: string): Promise<InventoryType | null>;
  findAll(): Promise<InventoryType[]>;

  findByProduct(productID: string): Promise<InventoryType[]>;
  findByWarehouse(warehouseID: string): Promise<InventoryType[]>;
  adjustQuantity(inventoryID: string, quantity: number): Promise<InventoryType>;
}