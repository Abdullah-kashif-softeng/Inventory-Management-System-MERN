export interface ProductResponse {
  id: string;
  productCode: string;
  barCode: string;
  productName: string;
  productDescription: string;
  reorderQuantity: number;
  packedWeight?: number | null;
  packedHeight?: number | null;
  packedDepth?: number | null;
  packedWidth?: number | null;
  refrigerated: boolean;
  productCategoryID: string | null;
  productSubCategoryID: string | null;
  providerID?: string | null;
}
