import { Types } from "mongoose";

export interface InventoryType {
            // Mongo _id
  quantityAvailable: number;
  minimumStockLevel: number;
  maximumStockLevel: number;
  reorderPoint: number;
  productID?: string | Types.ObjectId | null;
  warehouseID?: string | Types.ObjectId | null;
  shopID: string | Types.ObjectId;        // required
}

export class Inventory implements InventoryType {
  quantityAvailable: number;
  minimumStockLevel: number;
  maximumStockLevel: number;
  reorderPoint: number;
  productID?: string | Types.ObjectId | null;
  warehouseID?: string | Types.ObjectId | null;
  shopID: string | Types.ObjectId;

  constructor(data: InventoryType) {
    // === Validations ===
    if (data.quantityAvailable < 0)
      throw new Error("Quantity cannot be negative");

    if (data.minimumStockLevel < 0)
      throw new Error("Minimum stock cannot be negative");

    if (data.maximumStockLevel < data.minimumStockLevel)
      throw new Error("Maximum stock must be greater than or equal to minimum stock");

    if (data.reorderPoint < 0)
      throw new Error("Reorder point cannot be negative");

    if (data.reorderPoint < data.minimumStockLevel)
      throw new Error("Reorder point must not be less than minimum stock");

    if (!data.shopID) throw new Error("Shop ID is required");

    

    // === Assignments ===
    
    this.quantityAvailable = data.quantityAvailable;
    this.minimumStockLevel = data.minimumStockLevel;
    this.maximumStockLevel = data.maximumStockLevel;
    this.reorderPoint = data.reorderPoint;
    this.productID = data.productID ?? null;
    this.warehouseID = data.warehouseID ?? null;
    this.shopID = data.shopID;
  }

  // === Behaviors ===
  increase(amount: number) {
    if (amount <= 0) throw new Error("Increase amount must be positive");
    if (this.quantityAvailable + amount > this.maximumStockLevel) {
      throw new Error("Cannot exceed maximum stock level");
    }
    this.quantityAvailable += amount;
  }

  decrease(amount: number) {
    if (amount <= 0) throw new Error("Decrease amount must be positive");
    if (this.quantityAvailable - amount < 0) {
      throw new Error("Cannot reduce below zero");
    }
    this.quantityAvailable -= amount;
  }

  needsReorder(): boolean {
    return this.quantityAvailable <= this.reorderPoint;
  }

  getStatus(): string {
    if (this.quantityAvailable <= this.minimumStockLevel) return "Low Stock";
    if (this.needsReorder()) return "Reorder Needed";
    if (this.quantityAvailable >= this.maximumStockLevel) return "Full Stock";
    return "Healthy";
  }
}
