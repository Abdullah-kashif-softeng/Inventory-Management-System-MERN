import { IApplicationUserRepository } from "../interfaces/IApplicationUserRepositry";
import { ApplicationUserType } from '../../domain/ApplicationUser';
import ApplicationUserModel  from "./schemas/ApplicationUser";

export class MangoApplicationUserRepositry implements IApplicationUserRepository{

    async create(applicationUser:ApplicationUserType):Promise<ApplicationUserType>{
        const doc=await ApplicationUserModel.create(applicationUser)
        return doc.toObject() as ApplicationUserType
    }

    async update(id:string, applicationUser:ApplicationUserType ):Promise<ApplicationUserType>{
       const doc=await ApplicationUserModel.findByIdAndUpdate(id,applicationUser,{ new: true });
       return doc?.toObject() as ApplicationUserType
    }

    async delete(id:string){
    const doc= await ApplicationUserModel.findByIdAndDelete(id)
    if (!doc) throw new Error("Product not found");

    }

    async findById(id:string){
        const doc=await ApplicationUserModel.findById(id)
        return doc?.toObject() as ApplicationUserType
    }

    async findAll() {
        const doc=await ApplicationUserModel.find()
        return doc.map((d) => d.toObject() as ApplicationUserType);
    }

    async findByEmail(email: string) {
        const doc=await ApplicationUserModel.findOne({email});
        return doc?.toObject() as ApplicationUserType
    }
}