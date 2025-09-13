"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductById = void 0;
class FindProductById {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(productID) {
        return this.productRepo.findById(productID);
    }
}
exports.FindProductById = FindProductById;
//# sourceMappingURL=FindProductById.js.map