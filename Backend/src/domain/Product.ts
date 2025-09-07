
export interface ProductType{
    productID:number,
    productCode:string,
    barCode:string,
    productName:string,
    productDescription:string,
    reorderQuantity:number,
    packedWeight:number|undefined,
    packedHeight:number|undefined,
    packedDepth:number|undefined,
    packedWidth:number|undefined,
    refrigerated:boolean,
    productCategoryID:number,
    productSubCategoryID:number
}

export class Product implements ProductType{

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

    constructor(data: ProductType) {
       
    if(!data.productID){
            throw new Error("Product ID Required");
        };
        if(!data.productName.trim())
        {
            throw new Error("Product Name Required");
        }
        if(!data.barCode.trim()){
            throw new Error("Product Bar Code Required");
        }
        if(!data.productCode){
           throw new Error("Product Code Required");
        }
        if(data.productName.length>100){
            throw new Error("Name too long");
        }
if (data.productDescription.length > 2000) throw new Error("Description too long");
  if (data.reorderQuantity < 0) throw new Error("Reorder quantity cannot be negative");

const nonNeg = (n?: number) => n == null || n >= 0;
  if (!nonNeg(data.packedWeight)) throw new Error("packedWeight must be >= 0");
  if (!nonNeg(data.packedHeight)) throw new Error("packedHeight must be >= 0");
  if (!nonNeg(data.packedWidth))  throw new Error("packedWidth must be >= 0");
  if (!nonNeg(data.packedDepth))  throw new Error("packedDepth must be >= 0");


  if (data.productCategoryID <= 0) throw new Error("Invalid productCategoryID");

        this.productID = data.productID;
        this.productCode = data.productCode;
        this.barCode = data.barCode;
        this.productName = data.productName;
        this.productDescription = data.productDescription;
        this.reorderQuantity = data.reorderQuantity;
        this.packedWeight = data.packedWeight;
        this.packedHeight = data.packedHeight;
        this.packedDepth = data.packedDepth;
        this.packedWidth = data.packedWidth;
        this.refrigerated = data.refrigerated;
        this.productCategoryID = data.productCategoryID;
        this.productSubCategoryID = data.productSubCategoryID;
    }

    rename(newName: string) {
  if (!newName.trim()) throw new Error("Product name required");
  if (newName.length > 100) throw new Error("Name too long");
  this.productName = newName;
}
updateDescription(desc: string) {
  if (desc.length > 2000) throw new Error("Description too long");
  this.productDescription = desc;
}
setReorderQuantity(q: number) {
  if (q < 0) throw new Error("Reorder quantity cannot be negative");
  this.reorderQuantity = q;
}
needsReorder(currentStock: number): boolean {
  return currentStock <= this.reorderQuantity;
}

calculateVolume(): number | undefined {
  if (this.packedHeight && this.packedWidth && this.packedDepth) {
    return this.packedHeight * this.packedWidth * this.packedDepth;
  }
  return undefined;
}
toJSON() {
  return { ...this };
}
}

