import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";
export declare class FindProductById {
    private productRepo;
    constructor(productRepo: ProductRepository);
    execute(productID: number): Promise<ProductType | null>;
}
//# sourceMappingURL=FindProductById.d.ts.map