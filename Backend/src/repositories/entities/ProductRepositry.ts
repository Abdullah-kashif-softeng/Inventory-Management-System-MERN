import { ProductType } from "../../domain/Product";
import { ProductRepository } from "../interfaces/IProductRepositry";


export class InMemoryProductRepository implements ProductRepository {
  private products: ProductType[] = [];
  async create(product: ProductType): Promise<ProductType> {
    this.products.push(product);
    return product;
  }



  async update(product: ProductType): Promise<ProductType> {
    const index = this.products.findIndex(p => p.productID === product.productID);
    if (index === -1) throw new Error("Product not found");
    this.products[index] = product;
    return product;
  }
  async delete(productID: number): Promise<void> {
    this.products = this.products.filter(p => p.productID !== productID);
  }
  async findById(productID: number): Promise<ProductType | null> {
    const product = this.products.find(p => p.productID === productID);
    return product || null;
  }
  async findAll(): Promise<ProductType[]> {
    return this.products;
  }
}