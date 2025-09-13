import { InventoryType } from "../../domain/Inventory";

export interface IInventoryRepository {
  create(inventory: InventoryType): Promise<InventoryType>;
  update(id: string, inventory: InventoryType): Promise<InventoryType>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<InventoryType | null>;
  findAll(): Promise<InventoryType[]>;
}
