import { Types } from "mongoose";

export interface WarehouseType {
       // Mongo _id
  warehouseCode: string;
  warehouseName: string;
  locationID: string | Types.ObjectId; // reference to Location
  capacity?: number|undefined;
  description?: string|undefined;
  isActive: boolean;
}

export class Warehouse implements WarehouseType {

  warehouseCode: string;
  warehouseName: string;
  locationID: string | Types.ObjectId;
  capacity?: number | undefined;
  description?: string|undefined;
  isActive: boolean;

  constructor(data: WarehouseType) {
    if (!data.warehouseCode?.trim()) throw new Error("Warehouse code is required");
    if (!data.warehouseName?.trim()) throw new Error("Warehouse name is required");
    if (!data.locationID) throw new Error("Location ID is required");
    if (data.capacity !== undefined && data.capacity < 0) throw new Error("Capacity cannot be negative");
    
    this.warehouseCode = data.warehouseCode.trim();
    this.warehouseName = data.warehouseName.trim();
    this.locationID = data.locationID;
    this.capacity = data.capacity;          // ✅ safe now
    this.description = data.description;
    this.isActive = data.isActive;
  }


  rename(newName: string) {
    if (!newName.trim()) throw new Error("Warehouse name cannot be empty");
    this.warehouseName = newName.trim();
  }

  deactivate() {
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }
}
