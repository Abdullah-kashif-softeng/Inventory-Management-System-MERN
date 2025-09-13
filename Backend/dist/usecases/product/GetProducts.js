"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProducts = void 0;
class GetAllProducts {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute() {
        return this.productRepo.findAll();
    }
}
exports.GetAllProducts = GetAllProducts;
//# sourceMappingURL=GetProducts.js.map