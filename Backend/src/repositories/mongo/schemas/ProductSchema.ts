
import mongoose from "mongoose";
import { ProductType } from "../../../domain/Product";


const ProductSchema = new mongoose.Schema<ProductType>(
  {
    productID: { type: String, required: true }, // stored as string
    productCode: { type: String, required: true },
    barCode: { type: String, required: true },
    productName: { type: String, required: true, maxlength: 100 },
    productDescription: { type: String, required: true, maxlength: 2000 },
    reorderQuantity: { type: Number, required: true, min: 0 },
    packedWeight: { type: Number, default: null },
    packedHeight: { type: Number, default: null },
    packedDepth: { type: Number, default: null },
    packedWidth: { type: Number, default: null },
    refrigerated: { type: Boolean, required: true },
    productCategoryID: { type: String, required: true },
    productSubCategoryID: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<ProductType>("Product", ProductSchema);