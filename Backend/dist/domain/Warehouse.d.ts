export interface WarehouseType {
    warehouseID: number;
    warehouseName: string;
    isRefrigerated: boolean;
    locationID: number | undefined;
}
export declare class Warehouse implements WarehouseType {
    warehouseID: number;
    warehouseName: string;
    isRefrigerated: boolean;
    locationID: number | undefined;
    constructor(data: WarehouseType);
    rename(newName: string): void;
    moveToLocation(newLocationId: number): void;
}
//# sourceMappingURL=Warehouse.d.ts.map