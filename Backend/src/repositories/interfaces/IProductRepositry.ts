import { ProductType } from "../../domain/Product"

export interface ProductRepository {
  create(product: ProductType): Promise<ProductType>;
  update(product: ProductType): Promise<ProductType>;
  delete(productID: number): Promise<void>;
  findById(productID: number): Promise<ProductType | null>;
  findAll(): Promise<ProductType[]>;
}





