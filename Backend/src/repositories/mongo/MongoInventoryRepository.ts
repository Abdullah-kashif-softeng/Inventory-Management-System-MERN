// repositories/mongo/MongoInventoryRepository.ts

import InventoryModel, { InventoryDocument } from "./schemas/InventorySchema";
import { InventoryType } from "../../domain/Inventory";
import { IInventoryRepository } from "../../repositories/interfaces/IInventoryRepositry";

// src/repositories/mongo/MongoInventoryRepository.ts


// src/repositories/mongo/MongoInventoryRepository.ts

export class MongoInventoryRepository implements IInventoryRepository {
  async create(inventory: InventoryType): Promise<InventoryType> {
    const doc = await InventoryModel.create(inventory);
    return doc.toObject() as unknown as InventoryType;
  }

  async update(inventory: InventoryType): Promise<InventoryType> {
    const doc = await InventoryModel.findByIdAndUpdate(
      inventory.id,
      inventory,
      { new: true }
    );
    if (!doc) throw new Error("Inventory not found");
    return doc.toObject() as unknown as InventoryType;
  }

  async delete(id: string): Promise<void> {
    await InventoryModel.findByIdAndDelete(id);
  }

  async findById(id: string): Promise<InventoryType | null> {
    const doc = await InventoryModel.findById(id);
    return doc ? (doc.toObject() as unknown as InventoryType) : null;
  }

  async findAll(): Promise<InventoryType[]> {
    const docs = await InventoryModel.find();
    return docs.map((d) => d.toObject() as unknown as InventoryType);
  }
}

