

import { Provider,ProviderType } from "../../domain/Provider";
import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";

export class DeleteProvider{
    constructor(private repo:IProviderRepository){}
    async execute(id:string){
        if(!id){
            throw new Error("Id needed to delete Provider")

        }
        return await this.repo.delete(id);
        
    }
}