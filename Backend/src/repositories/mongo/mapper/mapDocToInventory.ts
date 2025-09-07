import { InventoryType } from "../../../domain/Inventory";
import { InventoryDocument } from "../schemas/InventorySchema";

export function mapDocToInventory(doc: InventoryDocument): InventoryType {
  return {
    id: doc._id.toString(),
    quantityAvailable: doc.quantityAvailable,
    minimumStockLevel: doc.minimumStockLevel,
    maximumStockLevel: doc.maximumStockLevel,
    reorderPoint: doc.reorderPoint,
    batchNo: doc.batchNo,
    productID: doc.productID?.toString(),
    warehouseID: doc.warehouseID?.toString(),
    shopID: doc.shopID.toString(),
  };
}
