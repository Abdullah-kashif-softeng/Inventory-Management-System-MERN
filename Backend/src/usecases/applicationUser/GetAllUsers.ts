

import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser,ApplicationUserType } from "../../domain/ApplicationUser";

export class GetAllUsers{
    constructor(private repo:IApplicationUserRepository){}

    async execute(){
        return await this.repo.findAll()
    }
}