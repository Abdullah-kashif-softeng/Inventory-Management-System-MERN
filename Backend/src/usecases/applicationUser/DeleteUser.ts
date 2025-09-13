

import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser, ApplicationUserType } from '../../domain/ApplicationUser';

export class DeleteUser{

    constructor(private repo:IApplicationUserRepository){

    }

    async execute(id:string){
if(!id) throw new Error("The id is must to delete user")

        return await this.repo.delete(id)

    }
}