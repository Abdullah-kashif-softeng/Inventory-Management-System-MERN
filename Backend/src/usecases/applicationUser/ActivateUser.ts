import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser,ApplicationUserType } from "../../domain/ApplicationUser";

export class ActivateUser{
    constructor(private repo:IApplicationUserRepository){}


    async execute(id:string){
        const existing=await this.repo.findById(id)
        if(!existing) throw new Error("The User doesnt exist")

        const entity=new ApplicationUser(existing)
        entity.activate()

        return await this.repo.update(id,entity)
    }
}