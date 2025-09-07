import InventoryModel, { InventoryDocument } from "./schemas/InventorySchema";
import { InventoryType } from "../../domain/Inventory";
import { InventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import { mapDocToInventory } from "./mapper/mapDocToInventory";

export class MongoInventoryRepository implements InventoryRepository {
  async create(inventory: InventoryType): Promise<InventoryType> {
    const doc = await InventoryModel.create(inventory);
    return mapDocToInventory(doc);
  }

  async update(inventory: InventoryType): Promise<InventoryType> {
    const doc = await InventoryModel.findByIdAndUpdate(inventory.id, inventory, { new: true });
    if (!doc) throw new Error("Inventory not found");
    return mapDocToInventory(doc);
  }

  async delete(id: string): Promise<void> {
    await InventoryModel.findByIdAndDelete(id);
  }

  async findById(id: string): Promise<InventoryType | null> {
    const doc = await InventoryModel.findById(id);
    return doc ? mapDocToInventory(doc) : null;
  }

  async findAll(): Promise<InventoryType[]> {
    const docs = await InventoryModel.find();
    return docs.map(mapDocToInventory);
  }

  async findByProduct(productID: string): Promise<InventoryType[]> {
  const docs = await InventoryModel.find({ productID });
  return docs.map(mapDocToInventory);
}

async findByWarehouse(warehouseID: string): Promise<InventoryType[]> {
  const docs = await InventoryModel.find({ warehouseID });
  return docs.map(mapDocToInventory);
}
  async adjustQuantity(id: string, quantity: number): Promise<InventoryType> {
    const doc = await InventoryModel.findByIdAndUpdate(
      id,
      { $inc: { quantityAvailable: quantity } },
      { new: true }
    );
    if (!doc) throw new Error("Inventory not found");
    return mapDocToInventory(doc);
  }
}
