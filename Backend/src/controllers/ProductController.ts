import { MongoProductRepository } from "../repositories/mongo/MongoProductRepositry";

export class ProductController {
    productRepository: MongoProductRepository;
    constructor() {
        this.productRepository = new MongoProductRepository();
    }
    
}