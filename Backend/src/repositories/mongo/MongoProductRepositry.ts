
import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import ProductModel from "./schemas/ProductSchema";
import { ProductType } from "../../domain/Product"; 

export class MongoProductRepository implements ProductRepository {
  async create(product: ProductType): Promise<ProductType> {
    const doc = await ProductModel.create(product);
    return doc.toObject() as ProductType;
  }

  async update(id:string, product: ProductType): Promise<ProductType> {
    if (!id) throw new Error("Product ID is required");

    const doc = await ProductModel.findByIdAndUpdate(
      id,
      product,
      { new: true }
    );

    if (!doc) throw new Error("Product not found");

    return doc.toObject() as ProductType;
  }

  async delete(id: string): Promise<void> {
    const doc = await ProductModel.findByIdAndDelete(id);
    if (!doc) throw new Error("Product not found");
  }

  async findById(id: string): Promise<ProductType | null> {
    const doc = await ProductModel.findById(id);
    return doc ? (doc.toObject()as ProductType) : null;
  }

  async findAll(): Promise<ProductType[]> {
    const docs = await ProductModel.find();
    return docs.map((d) => d.toObject() as ProductType);
  }
}
