

import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser,ApplicationUserType } from "../../domain/ApplicationUser";

export class GetUser{
    constructor(private repo:IApplicationUserRepository){}

    async execute(id:string){
        if(!id) throw new Error("The id is must")
        return await this.repo.findById(id)
        
    }
}