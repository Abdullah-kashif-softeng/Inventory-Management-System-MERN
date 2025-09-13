import { ProductRepository } from "../../repositories/interfaces/IProductRepositry";
import { ProductType,Product } from "../../domain/Product";

export class UpdateProductDescription{

    constructor(private repo:ProductRepository){}


    async execute(id:string, desc:string){
        const exisitng=await this.repo.findById(id);
        if(!exisitng) throw new Error("This product doesnt exist")

        const entity=new Product(exisitng)
        entity.updateDescription(desc);
        return await this.repo.update(id, entity);
    }
}