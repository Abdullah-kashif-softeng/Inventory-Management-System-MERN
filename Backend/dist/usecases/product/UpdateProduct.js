"use strict";
// src/usecases/product/UpdateProduct.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduct = void 0;
class UpdateProduct {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(product) {
        return this.productRepo.update(product);
    }
}
exports.UpdateProduct = UpdateProduct;
//# sourceMappingURL=UpdateProduct.js.map