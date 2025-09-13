// src/repositories/mongo/schemas/RoleSchema.ts
import mongoose, { Schema, Document } from "mongoose";

export interface RoleDocument extends Document {
  name: string;
  description?: string;
  permissions: string[];
  isDefault: boolean;
}

const RoleSchema = new Schema<RoleDocument>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, default: "" },
    permissions: { type: [String], default: [] },
    isDefault: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model<RoleDocument>("Role", RoleSchema);
