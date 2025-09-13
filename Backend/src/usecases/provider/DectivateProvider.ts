

import { Provider } from "../../domain/Provider";
import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";

export class DeactivateProvider{
    constructor(private repo:IProviderRepository){}

    async execute(id:string){
        const existing=await this.repo.findById(id)
        if(!existing) throw new Error("The Provider doesnt exist")
        
            const entity=new Provider(existing)
            entity.deactivate()
            return await this.repo.update(id,entity)
    }
}