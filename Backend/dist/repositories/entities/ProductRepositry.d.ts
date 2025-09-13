import { ProductType } from "../../domain/Product";
import { ProductRepository } from "../interfaces/IProductRepositry";
export declare class InMemoryProductRepository implements ProductRepository {
    private products;
    create(product: ProductType): Promise<ProductType>;
    update(product: ProductType): Promise<ProductType>;
    delete(productID: number): Promise<void>;
    findById(productID: number): Promise<ProductType | null>;
    findAll(): Promise<ProductType[]>;
}
//# sourceMappingURL=ProductRepositry.d.ts.map