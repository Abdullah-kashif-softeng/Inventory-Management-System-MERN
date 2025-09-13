import mongoose, { Schema, Document, Types } from "mongoose";

export interface ProviderDocument extends Document {
  
  providerName: string;
  contactName: string;
  phone: string;
  email: string;
  address?: string;
  activeStatus: boolean;
}

const ProviderSchema = new Schema<ProviderDocument>(
  {

    providerName: { type: String, required: true, trim: true },
    contactName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, default: "" },
    activeStatus: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model<ProviderDocument>("Provider", ProviderSchema);
