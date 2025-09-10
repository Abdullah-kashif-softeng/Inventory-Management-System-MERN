// src/utils/normalizers.ts
import { InventoryType } from "../domain/Inventory";

export function normalizeInventory(inv: InventoryType): InventoryType {
  return {
    ...inv,
    id: inv.id ? String(inv.id) : undefined,
    shopID: inv.shopID ? String(inv.shopID) : "",
    productID: inv.productID ? String(inv.productID) : undefined,
    warehouseID: inv.warehouseID ? String(inv.warehouseID) : undefined,
  };
}
import { ProductType } from "../domain/Product";

export function normalizeProduct(p: ProductType): ProductType {
  return {
    ...p,
    productID: p.productID ? String(p.productID) : "",
    productCategoryID: p.productCategoryID
      ? String(p.productCategoryID)
      : "",
    productSubCategoryID: p.productSubCategoryID
      ? String(p.productSubCategoryID)
      : "",
  };
}
