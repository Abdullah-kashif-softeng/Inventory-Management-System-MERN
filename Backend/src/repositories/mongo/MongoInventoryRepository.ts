import { IInventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";
import InventoryModel from "./schemas/InventorySchema";
import { InventoryType } from "../../domain/Inventory";

export class MongoInventoryRepository implements IInventoryRepository {
  async create(inventory: InventoryType): Promise<InventoryType> {
    const doc = await InventoryModel.create(inventory);
    return doc.toObject() as InventoryType;
  }

  async update(id: string, inventory: InventoryType): Promise<InventoryType> {
  const doc = await InventoryModel.findByIdAndUpdate(id, inventory, { new: true });

  if (!doc) throw new Error("Inventory not found");

  return doc.toObject() as InventoryType;
}

  async delete(id: string): Promise<void> {
    const doc = await InventoryModel.findByIdAndDelete(id);
    if (!doc) throw new Error("Inventory not found");
  }

  async findById(id: string): Promise<InventoryType | null> {
    const doc = await InventoryModel.findById(id);
    return doc ? (doc.toObject() as InventoryType) : null;
  }

  async findAll(): Promise<InventoryType[]> {
    const docs = await InventoryModel.find();
    return docs.map((d) => d.toObject() as InventoryType);
  }
}
