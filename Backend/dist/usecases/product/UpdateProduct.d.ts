import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";
export declare class UpdateProduct {
    private productRepo;
    constructor(productRepo: ProductRepository);
    execute(product: ProductType): Promise<ProductType>;
}
//# sourceMappingURL=UpdateProduct.d.ts.map