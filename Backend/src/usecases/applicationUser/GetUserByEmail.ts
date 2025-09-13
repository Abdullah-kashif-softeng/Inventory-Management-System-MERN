

import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser,ApplicationUserType } from "../../domain/ApplicationUser";

export class GetUserByEmail{
    constructor(private repo:IApplicationUserRepository){}

    async execute(email:string){
        return await this.repo.findByEmail(email)
    }
}