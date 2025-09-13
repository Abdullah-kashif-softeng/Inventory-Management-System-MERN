import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { Product,ProductType } from "../../domain/Product";

export class SetReorderQuantity{

    constructor(private repo:ProductRepository){}

    async execute(id:string, qty:number){
        const existing=await this.repo.findById(id);

        if(!existing){
            throw new Error("This product doesnt exist")
        }

        const entity=new Product(existing)
        entity.setReorderQuantity(qty)
       return await this.repo.update(id, entity)
    }
}