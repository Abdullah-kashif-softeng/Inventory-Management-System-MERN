

 import { Provider } from "../../domain/Provider";
 import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";

 export class GetAllProvider{

    constructor(private repo:IProviderRepository){

    }

    async execute(){
        return await this.repo.findAll()
    }
 }