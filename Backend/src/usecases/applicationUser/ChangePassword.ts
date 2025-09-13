
import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser,ApplicationUserType } from "../../domain/ApplicationUser";

export class ChangeUserPassword{
    constructor(private repo:IApplicationUserRepository){}


    async execute(id:string,newPass:string){
        const existing=await this.repo.findById(id)
        if(!existing) throw new Error("The User doesnt exist")

        const entity=new ApplicationUser(existing)
        entity.changePassword(newPass)

        return await this.repo.update(id,entity)
    }
}