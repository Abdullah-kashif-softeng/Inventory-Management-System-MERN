

import { Provider } from "../../domain/Provider";
import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";


export class ActivateProvider{
    constructor(private repo:IProviderRepository){}

    async execute(id:string){
      const existing=await this.repo.findById(id)
      if(!existing) throw new Error("The Provider Deisnt exist")

        const entity=new Provider(existing)
        entity.activate()
        return await this.repo.update(id,entity)
       
    }
}