
import mongoose from "mongoose";

export interface Product{
     productID: number;
    productCode: string;
    barCode: string;
    productName: string;
    productDescription: string;
    reorderQuantity: number;
    packedWeight: number | undefined;
    packedHeight: number | undefined;
    packedDepth: number | undefined;
    packedWidth: number | undefined;
    refrigerated: boolean;
    productCategoryID: number;
    productSubCategoryID: number;
}

const ProductScehma=new mongoose.Schema<Product>({
    productID: { type: Number, required: true },
    productCode: { type: String, required: true },
    barCode: { type: String, required: true },
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    reorderQuantity: { type: Number, required: true },
    packedWeight: { type: Number, required: true },
    packedHeight: { type: Number, required: true },
    packedDepth: { type: Number, required: true },
    packedWidth: { type: Number, required: true },
    refrigerated: { type: Boolean, required: true },
    productCategoryID: { type: Number, required: true },
    productSubCategoryID: { type: Number, required: true },
});

export default mongoose.model<Product>("Product", ProductScehma);