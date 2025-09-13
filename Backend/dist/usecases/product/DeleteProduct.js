"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProduct = void 0;
class DeleteProduct {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(productID) {
        return this.productRepo.delete(productID);
    }
}
exports.DeleteProduct = DeleteProduct;
//# sourceMappingURL=DeleteProduct.js.map