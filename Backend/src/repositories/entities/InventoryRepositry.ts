import { InventoryType } from "../../domain/Inventory";
import { InventoryRepository } from "../interfaces/IInventoryRepositry";
export class InMemoryInventoryRepository implements InventoryRepository {
  private inventories: InventoryType[] = [];

  async create(inventory: InventoryType): Promise<InventoryType> {
    this.inventories.push(inventory);
    return inventory;
  }

  async update(inventory: InventoryType): Promise<InventoryType> {
    const index = this.inventories.findIndex(i => i.inventoryID === inventory.inventoryID);
    if (index === -1) throw new Error("Inventory not found");
    this.inventories[index] = inventory;
    return inventory;
  }

  async delete(inventoryID: number): Promise<void> {
    this.inventories = this.inventories.filter(i => i.inventoryID !== inventoryID);
  }

  async findById(inventoryID: number): Promise<InventoryType | null> {
    const inventory = this.inventories.find(i => i.inventoryID === inventoryID);
    return inventory || null;
  }

  async findAll(): Promise<InventoryType[]> {
    return this.inventories;
  }

  async findByProduct(productID: number): Promise<InventoryType[]> {
    return this.inventories.filter(i => i.productID === productID);
  }

  async findByWarehouse(warehouseID: number): Promise<InventoryType[]> {
    return this.inventories.filter(i => i.warehouseID === warehouseID);
  }
  async adjustQuantity(inventoryID: number, quantity: number): Promise<InventoryType> {
    const inventory = this.inventories.find(i => i.inventoryID === inventoryID);
    if (!inventory) throw new Error("Inventory not found");
    inventory.quantityAvailable += quantity;
    if (inventory.quantityAvailable < 0) {
      inventory.quantityAvailable = 0;
    }
    return inventory;
  }
}