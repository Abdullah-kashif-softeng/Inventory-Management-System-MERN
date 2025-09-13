export interface WarehouseResponse {
  id: string;
  warehouseCode: string;
  warehouseName: string;
  locationID: string | null;
  capacity?: number | null;
  description?: string | null;
  isActive: boolean;
}
