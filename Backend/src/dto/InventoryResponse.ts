
export interface InventoryResponse {
  id: string;
  quantityAvailable: number;
  minimumStockLevel: number;
  maximumStockLevel: number;
  reorderPoint: number;
  productID?: string | null;
  warehouseID?: string | null;
  shopID: string;
  createdAt?: Date;
  updatedAt?: Date;
}