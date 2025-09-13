import mongoose, { Schema, Document, Types } from "mongoose";

// --- Mongo Document Interface ---
export interface ApplicationUserDocument extends Document {
  username: string;
  email: string;
  password: string;
  roleID: Types.ObjectId;            // reference to Role
  shopID?: Types.ObjectId | null;    // reference to Shop (optional)
  warehouseID?: Types.ObjectId | null; // reference to Warehouse (optional)
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// --- Mongoose Schema ---
const ApplicationUserSchema = new Schema<ApplicationUserDocument>(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true }, // ⚠️ must be hashed before save
    roleID: { type: Schema.Types.ObjectId, ref: "Role", required: true },
    shopID: { type: Schema.Types.ObjectId, ref: "Shop", default: null },
    warehouseID: { type: Schema.Types.ObjectId, ref: "Warehouse", default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<ApplicationUserDocument>(
  "ApplicationUser",
  ApplicationUserSchema
);
