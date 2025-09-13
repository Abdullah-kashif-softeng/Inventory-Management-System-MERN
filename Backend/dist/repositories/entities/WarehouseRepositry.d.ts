import { WarehouseType } from "../../domain/Warehouse";
import { WarehouseRepository } from "../interfaces/IWarehouseRepositry";
export declare class InMemoryWarehouseRepository implements WarehouseRepository {
    private warehouses;
    create(warehouse: WarehouseType): Promise<WarehouseType>;
    update(warehouse: WarehouseType): Promise<WarehouseType>;
    delete(warehouseID: number): Promise<void>;
    findById(warehouseID: number): Promise<WarehouseType | null>;
    findAll(): Promise<WarehouseType[]>;
}
//# sourceMappingURL=WarehouseRepositry.d.ts.map