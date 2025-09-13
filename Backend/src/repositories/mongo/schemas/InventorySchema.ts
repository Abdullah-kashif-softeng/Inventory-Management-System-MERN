import mongoose, { Schema, Document, Types } from "mongoose";

export interface InventoryDocument extends Document {
  quantityAvailable: number;
  minimumStockLevel: number;
  maximumStockLevel: number;
  reorderPoint: number;
  productID?: Types.ObjectId | null;   
  warehouseID?: Types.ObjectId | null; 
  shopID: Types.ObjectId;               
}

const InventorySchema = new Schema<InventoryDocument>(
  {
    quantityAvailable: { type: Number, default: 0 },
    minimumStockLevel: { type: Number, required: true },
    maximumStockLevel: { type: Number, required: true },
    reorderPoint: { type: Number, required: true },
    productID: { type: Schema.Types.ObjectId, ref: "Product", default: null },
    warehouseID: { type: Schema.Types.ObjectId, ref: "Warehouse", default: null },
    shopID: { type: Schema.Types.ObjectId, ref: "Shop", required: true }
  },
  { timestamps: true }
);

export default mongoose.model<InventoryDocument>("Inventory", InventorySchema);
