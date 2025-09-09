// domain/Inventory.ts
import { ObjectId } from "mongoose";
export interface InventoryType {
  id?: string|undefined;
  quantityAvailable: number;
  minimumStockLevel: number;
  maximumStockLevel: number;
  reorderPoint: number;
  productID?: string|undefined|ObjectId;
  warehouseID?: string|undefined|ObjectId;
  shopID: string|ObjectId;
}

export class Inventory {
  id?: string|undefined;
  quantityAvailable: number;
  minimumStockLevel: number;
  maximumStockLevel: number;
  reorderPoint: number;
  productID?: string|undefined|ObjectId;
  warehouseID?: string|undefined|ObjectId;
  shopID: string|ObjectId;

  constructor(data: InventoryType) {
    this.id = data.id;
    this.quantityAvailable = data.quantityAvailable;
    this.minimumStockLevel = data.minimumStockLevel;
    this.maximumStockLevel = data.maximumStockLevel;
    this.reorderPoint = data.reorderPoint;
    this.productID = data.productID;
    this.warehouseID = data.warehouseID;
    this.shopID = data.shopID;
  }

  increase(amount: number) {
    this.quantityAvailable += amount;
  }

  decrease(amount: number) {
    this.quantityAvailable -= amount;
  }

  needsReorder(): boolean {
    return this.quantityAvailable <= this.reorderPoint;
  }
}
