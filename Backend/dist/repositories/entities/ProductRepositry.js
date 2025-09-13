"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryProductRepository = void 0;
class InMemoryProductRepository {
    constructor() {
        this.products = []; // store products in memory
    }
    async create(product) {
        this.products.push(product);
        return product;
    }
    async update(product) {
        const index = this.products.findIndex(p => p.productID === product.productID);
        if (index === -1)
            throw new Error("Product not found");
        this.products[index] = product;
        return product;
    }
    async delete(productID) {
        this.products = this.products.filter(p => p.productID !== productID);
    }
    async findById(productID) {
        const product = this.products.find(p => p.productID === productID);
        return product || null;
    }
    async findAll() {
        return this.products;
    }
}
exports.InMemoryProductRepository = InMemoryProductRepository;
//# sourceMappingURL=ProductRepositry.js.map