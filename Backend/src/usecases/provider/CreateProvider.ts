

import { Provider, ProviderType } from '../../domain/Provider';
import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";

export class CreateProvider{

    constructor(private repo:IProviderRepository){

    }

    async execute(data:ProviderType):Promise<ProviderType>{
     const entity=new Provider(data)
     return await this.repo.create(entity)

    }
}