import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser,ApplicationUserType } from "../../domain/ApplicationUser";
import { strict } from "assert";

export class ChangeUserRole{
    constructor(private repo:IApplicationUserRepository){}


    async execute(id:string, role:string){
        const existing=await this.repo.findById(id)
        if(!existing) throw new Error("The User doesnt exist")

        const entity=new ApplicationUser(existing)
        entity.changeRole(role)

        return await this.repo.update(id,entity)
    }
}