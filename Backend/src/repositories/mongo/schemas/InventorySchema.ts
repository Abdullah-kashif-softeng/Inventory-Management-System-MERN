
import {InventoryType} from "../../../domain/Inventory";
import mongoose, { Schema, Document, Types } from "mongoose";

export interface InventoryDocument extends Omit<InventoryType, "id" | "shopID" | "productID" | "warehouseID">, Document {
    _id: Types.ObjectId;
  shopID: Types.ObjectId;
  productID?: Types.ObjectId;
  warehouseID?: Types.ObjectId;
}

const InventorySchema=new mongoose.Schema<InventoryDocument>({
 quantityAvailable: { type: Number, default: 0 },
  minimumStockLevel: { type: Number, required: true },
  maximumStockLevel: { type: Number, required: true },
  reorderPoint: { type: Number, required: true },
  productID: { type: Schema.Types.ObjectId, ref: "Product" },
  warehouseID: { type: Schema.Types.ObjectId, ref: "Warehouse" },
  shopID: { type: Schema.Types.ObjectId, ref: "Shop", required: true },
  batchNo: { type: String },

}, { timestamps: true });

export default mongoose.model<InventoryDocument>("Inventory", InventorySchema);