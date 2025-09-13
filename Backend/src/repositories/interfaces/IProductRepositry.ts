// src/repositories/interfaces/IProductRepository.ts
import { ProductType } from "../../domain/Product";

export interface ProductRepository {
  create(product: ProductType): Promise<ProductType>;
  update(id:string, product: ProductType): Promise<ProductType>;
  delete(productID: string): Promise<void>;  // ✅ string
  findById(productID: string): Promise<ProductType | null>;  // ✅ string
  findAll(): Promise<ProductType[]>;
}
