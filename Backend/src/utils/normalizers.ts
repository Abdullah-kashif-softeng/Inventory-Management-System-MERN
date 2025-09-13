import { ProductResponse } from "../dto/ProductResponse";
import { InventoryResponse } from "../dto/InventoryResponse";
import { WarehouseResponse } from "../dto/WarehouseResponse";
import { ProviderResponse } from "../dto/ProviderResponse";

// ✅ Product
export function normalizeProduct(p: any): ProductResponse {
  return {
    id: p._id?.toString() ?? "",
    productCode: p.productCode,
    barCode: p.barCode,
    productName: p.productName,
    productDescription: p.productDescription,
    reorderQuantity: p.reorderQuantity,
    packedWeight: p.packedWeight ?? null,
    packedHeight: p.packedHeight ?? null,
    packedDepth: p.packedDepth ?? null,
    packedWidth: p.packedWidth ?? null,
    refrigerated: p.refrigerated,
    productCategoryID: p.productCategoryID?.toString() ?? null,
    productSubCategoryID: p.productSubCategoryID?.toString() ?? null,
    providerID: p.providerID?.toString() ?? null,
  };
}

// ✅ Inventory
export function normalizeInventory(inv: any): InventoryResponse {
  return {
    id: inv._id?.toString() ?? "",
    shopID: inv.shopID?.toString() ?? "",
    productID: inv.productID?.toString() ?? null,
    warehouseID: inv.warehouseID?.toString() ?? null,
    quantityAvailable: inv.quantityAvailable,
    minimumStockLevel: inv.minimumStockLevel,
    maximumStockLevel: inv.maximumStockLevel,
    reorderPoint: inv.reorderPoint,
  };
}

// ✅ Warehouse
export function normalizeWarehouse(w: any): WarehouseResponse {
  return {
    id: w._id?.toString() ?? "",
    warehouseCode: w.warehouseCode,
    warehouseName: w.warehouseName,
    locationID: w.locationID?.toString() ?? null,
    capacity: w.capacity ?? null,
    description: w.description ?? null,
    isActive: w.isActive,
  };
}

// ✅ Provider
export function normalizeProvider(pr: any): ProviderResponse {
  return {
    id: pr._id?.toString() ?? "",
    providerName: pr.providerName,
    contactName: pr.contactName,
    phone: pr.phone,
    email: pr.email,
    address: pr.address ?? null,
    isActive: pr.isActive,
  };
}

import { ApplicationUserResponse } from "../dto/ApplicationUserResponse";

// ✅ ApplicationUser
export function normalizeApplicationUser(user: any): ApplicationUserResponse {
  return {
    id: user._id?.toString() ?? "",
    username: user.username,
    email: user.email,
    roleID: user.roleID?.name ?? "",
    shopID: user.shopID ? user.shopID.toString() : null,
    warehouseID: user.warehouseID ? user.warehouseID.toString() : null,
    isActive: user.isActive,
    createdAt: user.createdAt?.toISOString?.() ?? "",
    updatedAt: user.updatedAt?.toISOString?.() ?? "",
  };

}


// src/utils/normalizers.ts
import { Role,RoleType } from "../domain/Role";
import { RoleResponseDTO } from "../dto/RoleResponse";

export function normalizeRole(role: RoleType & { _id?: any }): RoleResponseDTO {
  return {
    id: role._id?.toString() ?? "",
    name: role.name,
    description: role.description ?? null,
    permissions: role.permissions,
    isDefault: role.isDefault ?? false,
  };
}


