// repositories/mongo/InventorySchema.ts

import mongoose, { Schema, Document } from "mongoose";

export interface InventoryDocument extends Document {
  quantityAvailable: number;
  minimumStockLevel: number;
  maximumStockLevel: number;
  reorderPoint: number;
  productID?: string;
  warehouseID?: string;
  shopID: string;
}

const InventorySchema = new Schema<InventoryDocument>({
  quantityAvailable: { type: Number, default: 0 },
  minimumStockLevel: { type: Number, required: true },
  maximumStockLevel: { type: Number, required: true },
  reorderPoint: { type: Number, required: true },
  productID: { type: String },
  warehouseID: { type: String },
  shopID: { type: String, required: true }
});

export default mongoose.model<InventoryDocument>("Inventory", InventorySchema);
