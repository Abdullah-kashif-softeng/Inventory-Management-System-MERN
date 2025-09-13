import { IWarehouseRepository } from "../../repositories/interfaces/IWarehouseRepositry";
import WarehouseModel from "./schemas/WarehouseSchema";
import { WarehouseType } from "../../domain/Warehouse";

export class MongoWarehouseRepository implements IWarehouseRepository {
  async create(warehouse: WarehouseType): Promise<WarehouseType> {
    const doc = await WarehouseModel.create(warehouse);
    return doc.toObject() as WarehouseType;
  }

  async update(id:string, warehouse: WarehouseType): Promise<WarehouseType> {
    if (!id) throw new Error("Warehouse ID is required");

    const doc = await WarehouseModel.findByIdAndUpdate(
      id,
      warehouse,
      { new: true }
    );

    if (!doc) throw new Error("Warehouse not found");
    return doc.toObject() as WarehouseType;
  }

  async delete(id: string): Promise<void> {
    const doc = await WarehouseModel.findByIdAndDelete(id);
    if (!doc) throw new Error("Warehouse not found");
  }

  async findById(id: string): Promise<WarehouseType | null> {
    const doc = await WarehouseModel.findById(id);
    return doc ? (doc.toObject() as WarehouseType) : null;
  }

  async findAll(): Promise<WarehouseType[]> {
    const docs = await WarehouseModel.find();
    return docs.map((d) => d.toObject() as WarehouseType);
  }
}
