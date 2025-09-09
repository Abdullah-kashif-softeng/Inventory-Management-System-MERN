
import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import ProductModel from "./schemas/ProductSchema";
import { ProductType } from "../../domain/Product"; 

export class MongoProductRepository implements ProductRepository {
    async create(product: ProductType): Promise<ProductType> {
        const newProduct = new ProductModel(product);
        return newProduct.save();
    }

    async update(product: ProductType): Promise<ProductType> {
        const doc = await ProductModel.findById(product.productID);
  if (!doc) {
    throw new Error("Product not found");
  }
  return doc.toObject() as ProductType;

    }
    
    async delete(productID: number): Promise<void> {
        await ProductModel.deleteOne({ _id: productID });
    }
    
    async findById(productID: number): Promise<ProductType | null> {
        return ProductModel.findOne({ _id: productID });
    }
    
    async findAll(): Promise<ProductType[]> {
        return ProductModel.find();
    }
}
