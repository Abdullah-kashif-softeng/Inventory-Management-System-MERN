export interface ProductType {
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
export declare class Product implements ProductType {
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
    constructor(data: ProductType);
    rename(newName: string): void;
    updateDescription(desc: string): void;
    setReorderQuantity(q: number): void;
    needsReorder(currentStock: number): boolean;
    calculateVolume(): number | undefined;
    toJSON(): this;
}
//# sourceMappingURL=Product.d.ts.map