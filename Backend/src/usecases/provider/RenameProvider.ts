

import { Provider } from "../../domain/Provider";
import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";

export class RenameProvider{
    constructor(private repo:IProviderRepository){}

    async execute(id:string,newName:string){
       const existing=await this.repo.findById(id)
        if(!existing) throw new Error("The Provider doesnt exist")
        
        const entity=new Provider(existing)
        entity.rename(newName);
     return await this.repo.update(id,entity)


    }
}