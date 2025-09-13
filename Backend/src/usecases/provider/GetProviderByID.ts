
import { Provider,ProviderType } from "../../domain/Provider";
import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";

export class GetProviderById{

    constructor(private repo: IProviderRepository){}

    async execute(id:string){
 return await this.repo.findById(id)
 
    }
}