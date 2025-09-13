import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";
export declare class CreateProduct {
    private productRepo;
    constructor(productRepo: ProductRepository);
    execute(product: ProductType): Promise<ProductType>;
}
//# sourceMappingURL=CreateProduct.d.ts.map