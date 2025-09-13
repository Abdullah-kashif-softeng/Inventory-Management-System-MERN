import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";
import ProviderModel from "./schemas/ProviderSchema";
import { ProviderType } from "../../domain/Provider";

export class MongoProviderRepository implements IProviderRepository {
  async create(provider: ProviderType): Promise<ProviderType> {
    const doc = await ProviderModel.create(provider);
    return doc.toObject() as ProviderType;
  }

  async update(id:string, provider: ProviderType): Promise<ProviderType> {
    if (!id) throw new Error("Provider ID is required");

    const doc = await ProviderModel.findByIdAndUpdate(
      id,
      provider,
      { new: true }
    );

    if (!doc) throw new Error("Provider not found");
    return doc.toObject() as ProviderType;
  }

  async delete(id: string): Promise<void> {
    const doc = await ProviderModel.findByIdAndDelete(id);
    if (!doc) throw new Error("Provider not found");
  }

  async findById(id: string): Promise<ProviderType | null> {
    const doc = await ProviderModel.findById(id);
    return doc ? (doc.toObject() as ProviderType) : null;
  }

  async findAll(): Promise<ProviderType[]> {
    const docs = await ProviderModel.find();
    return docs.map((d) => d.toObject() as ProviderType);
  }
}
