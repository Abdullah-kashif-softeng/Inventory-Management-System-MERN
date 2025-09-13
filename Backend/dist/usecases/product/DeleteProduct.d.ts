import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
export declare class DeleteProduct {
    private productRepo;
    constructor(productRepo: ProductRepository);
    execute(productID: number): Promise<void>;
}
//# sourceMappingURL=DeleteProduct.d.ts.map