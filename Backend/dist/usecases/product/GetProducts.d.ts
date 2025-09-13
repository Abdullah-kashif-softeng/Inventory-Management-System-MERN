import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType } from "../../domain/Product";
export declare class GetAllProducts {
    private productRepo;
    constructor(productRepo: ProductRepository);
    execute(): Promise<ProductType[]>;
}
//# sourceMappingURL=GetProducts.d.ts.map