








export interface WarehouseType{
    warehouseID:number,
    warehouseName:string,
    isRefrigerated:boolean,
    locationID:number|undefined
}

export class Warehouse implements WarehouseType{


    warehouseID:number;
    warehouseName:string;
    isRefrigerated:boolean;
    locationID:number|undefined;


constructor(data:WarehouseType){
    

  if (!data.warehouseName?.trim()) throw new Error("Warehouse name required");
  if (data.warehouseName.length > 100) throw new Error("Name too long");
  if (data.warehouseID <= 0) throw new Error("Invalid warehouse ID");
  if (data.locationID !== undefined && data.locationID <= 0) throw new Error("Invalid location ID");


    this.isRefrigerated=data.isRefrigerated;
    this.warehouseName=data.warehouseName;
    this.warehouseID=data.warehouseID;
    this.locationID=data.locationID;
}






rename(newName: string) {
  if (!newName.trim()) throw new Error("Name required");
  if (newName.length > 100) throw new Error("Name too long");
  this.warehouseName = newName;
}

moveToLocation(newLocationId: number) {
  if (newLocationId <= 0) throw new Error("Invalid location ID");
  this.locationID = newLocationId;
}
}

