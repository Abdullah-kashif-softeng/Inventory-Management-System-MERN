"use strict";
// src/usecases/product/CreateProduct.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct = void 0;
class CreateProduct {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(product) {
        return this.productRepo.create(product);
    }
}
exports.CreateProduct = CreateProduct;
//# sourceMappingURL=CreateProduct.js.map