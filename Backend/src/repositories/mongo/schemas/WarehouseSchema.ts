import mongoose, { Schema, Document, Types } from "mongoose";

export interface WarehouseDocument extends Document {
  
  warehouseCode: string;
  warehouseName: string;
  locationID: Types.ObjectId;
  capacity?: number | null;
  description?: string;
  isActive: boolean;
}

const WarehouseSchema = new Schema<WarehouseDocument>(
  {
    warehouseCode: { type: String, required: true, unique: true, trim: true },
    warehouseName: { type: String, required: true, trim: true },
    locationID: { type: Schema.Types.ObjectId, ref: "Location", required: true },
    capacity: { type: Number, default: null, min: 0 },
    description: { type: String, default: "" },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model<WarehouseDocument>("Warehouse", WarehouseSchema);
