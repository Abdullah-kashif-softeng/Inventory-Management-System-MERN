

import { CreateUser } from "../usecases/applicationUser/CreateUser";
import { UpdateApplicationUser } from '../usecases/applicationUser/UpdateUser';
import { DeleteUser } from "../usecases/applicationUser/DeleteUser";
import { GetUser } from "../usecases/applicationUser/GetUser";
import { GetUserByEmail } from "../usecases/applicationUser/GetUserByEmail";
import { GetAllUsers } from "../usecases/applicationUser/GetAllUsers";
import { DeactivateUser } from "../usecases/applicationUser/DeactivateUser";
import { ActivateUser } from "../usecases/applicationUser/ActivateUser";
import { ChangeUserRole } from "../usecases/applicationUser/ChangeUserRole";
import { ChangeUserPassword } from "../usecases/applicationUser/ChangePassword";

import { IApplicationUserRepository } from "../repositories/interfaces/IApplicationUserRepositry";

import { Request, Response } from "express";
import { ApplicationUser } from "../domain/ApplicationUser";
import { normalizeApplicationUser } from "../utils/normalizers";

export class ApplicationUserController{
constructor(private repo:IApplicationUserRepository){}

async create(req:Request,res:Response){
try {
    const usecase=new CreateUser(this.repo)
    const result=await usecase.execute(req.body)
    res.status(200).json(normalizeApplicationUser(result))

} catch (error:any) {
    res.status(400).json({error:error.message})
}
}

async update(req:Request,res:Response){
    try{
    const {id}=req.params
    if(!id) throw new Error("The id is required")

    const usecase=new UpdateApplicationUser(this.repo)
    const result=await usecase.execute(id,req.body);
    res.status(200).json(normalizeApplicationUser(result))
}catch(error:any){
     res.status(400).json({error:error.message})
}
}

async delete(req:Request,res:Response){
    try {
        const {id}=req.params
    if(!id) throw new Error("The id is required")

    const usecase=new DeleteUser(this.repo)
    const result=await usecase.execute(id)
    res.status(200).json({msg:"The user is deleted successfully"})

    } catch (error:any) {
    res.status(400).json({error:error.message})
    }
}

async get(req:Request,res:Response){
    try {
        const {id}=req.params
            if(!id) throw new Error("The id is required")

        const usecase=new GetUser(this.repo)
        const result=await usecase.execute(id)
            res.status(200).json(normalizeApplicationUser(result))

    } catch (error:any) {
            res.status(400).json({error:error.message})

    }
}

async getUserByEmail(req:Request,res:Response){
     try {
    const { email } = req.query;

    if (!email || typeof email !== "string") {
      throw new Error("Email must be a string");
    }

    const usecase = new GetUserByEmail(this.repo);
    const result = await usecase.execute(email);

    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(normalizeApplicationUser(result));
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async getAllUsers(req:Request,res:Response){
    try {
        const usecase=new GetAllUsers(this.repo)
        const result=await usecase.execute()
        res.status(200).json(result.map(normalizeApplicationUser));
        
    } catch (error:any) {
            res.status(400).json({ error: error.message });

    }
}

async activate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("User ID is required");

      const usecase = new ActivateUser(this.repo);
      const result = await usecase.execute(id);

      res.json(normalizeApplicationUser(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // ✅ Deactivate User
  async deactivate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("User ID is required");

      const usecase = new DeactivateUser(this.repo);
      const result = await usecase.execute(id);

      res.json(normalizeApplicationUser(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // ✅ Change Role
  async changeRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { roleID } = req.body;

      if (!id) throw new Error("User ID is required");
      if (!roleID) throw new Error("New role ID is required");

      const usecase = new ChangeUserRole(this.repo);
      const result = await usecase.execute(id, roleID);

      res.json(normalizeApplicationUser(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // ✅ Change Password
  async changePassword(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { newPassword } = req.body;

      if (!id) throw new Error("User ID is required");
      if (!newPassword || typeof newPassword !== "string") {
        throw new Error("New password is required");
      }

      const usecase = new ChangeUserPassword(this.repo);
      const result = await usecase.execute(id, newPassword);

      res.json(normalizeApplicationUser(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

}