
import mongoose, { Schema,Types,Document } from "mongoose";
import { ProductType } from "../../../domain/Product";


export interface ProductDocument extends Document {
  
  productCode: string;
  barCode: string;
  productName: string;
  productDescription: string;
  reorderQuantity: number;
  packedWeight?: number|undefined;
  packedHeight?: number|undefined;
  packedDepth?: number|undefined;
  packedWidth?: number|undefined;
  refrigerated: boolean;
  productCategoryID: Types.ObjectId;
  productSubCategoryID: Types.ObjectId;
  providerID:Types.ObjectId;
}
const ProductSchema = new mongoose.Schema<ProductDocument>(
  {
   
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
    productCategoryID: { type: Schema.Types.ObjectId, ref: "ProductCategory", required: true },
productSubCategoryID: { type: Schema.Types.ObjectId, ref: "ProductSubCategory", required: true },
providerID: { type: Schema.Types.ObjectId, ref: "Provider", required: true }

  },
  { timestamps: true }
);

export default mongoose.model<ProductDocument>("Product", ProductSchema);