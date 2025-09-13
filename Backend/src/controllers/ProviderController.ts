
import { CreateProvider } from "../usecases/provider/CreateProvider";
import { DeleteProvider } from "../usecases/provider/DeleteProvider";
import { UpdateProvider } from "../usecases/provider/UpdateProvider";
import { ActivateProvider } from "../usecases/provider/ActivateProvider";
import { GetAllProvider } from "../usecases/provider/GetAllProviders";
import { GetProviderById } from "../usecases/provider/GetProviderByID";
import { RenameProvider } from "../usecases/provider/RenameProvider";
import { DeactivateProvider } from "../usecases/provider/DectivateProvider";

import { Request, Response } from "express";
import { IProviderRepository } from "../repositories/interfaces/IProviderRepositry";
import { normalizeProvider } from '../utils/normalizers';



export class ProviderController{
    constructor(private repo:IProviderRepository){}

    async create(req:Request,res:Response){
        try {
            const usecase=new CreateProvider(this.repo)
            const result=await usecase.execute(req.body)
            res.status(200).json(normalizeProvider(result))
        } catch (error:any) {
            res.status(400).json({error:error.message})
        }
    }

    async delete(req:Request,res:Response){
        try {
            const {id}=req.params
            if(!id) throw new Error("Id is must needed to delete")
            const usecase=new DeleteProvider(this.repo)
            await usecase.execute(id);
            res.status(200).json({msg:"user deleted successfully"})
        } catch (error:any) {
            res.status(400).json({msg:error.message})
        }
    }

    async update(req:Request,res:Response){
        try{
            const {id}=req.params
            if(!id) throw new Error("The id is needed to update")
            const usecases=new UpdateProvider(this.repo)
            const result=usecases.execute(id,req.body)
            res.status(200).json(normalizeProvider(result))
        }catch(error:any){
     res.status(400).json({error:error.message})
        }
    }

    async getAll(req:Request,res:Response){
        try {
            const usecase=new GetAllProvider(this.repo)
            const result=await usecase.execute()
            res.status(200).json(result.map(normalizeProvider))
        } catch (error:any) {
            res.status(400).json({error:error.message})
        }
    }

    async get(req:Request,res:Response){
        try {
            const {id}=req.params
            if(!id) throw new Error("Id must be needed ")
            const usecases=new GetProviderById(this.repo)
            const result=await usecases.execute(id)
            res.status(200).json(normalizeProvider(result))
        } catch (error:any) {
            res.status(400).json({error:error.message})
        }
    }

    async renameProvider(req:Request,res:Response){
        try {
            const {id}=req.params
            if(!id) throw new Error("Id must be given ")
            const usecases=new RenameProvider(this.repo);
            const result=await usecases.execute(id,req.body);
            res.status(200).json(normalizeProvider(result))
        } catch (error:any) {
            res.status(400).json({error:error.message})
        }
    }

    async activate(req:Request,res:Response){
        try {
            const {id}=req.params
                        if(!id) throw new Error("Id must be given ")

            const usecases=new ActivateProvider(this.repo)
            const result=usecases.execute(id);
            res.status(200).json(normalizeProvider(result));
        } catch (error:any ) {
                        res.status(400).json({error:error.message})

        }
    }

    async deactivate(req:Request,res:Response){
        try {
            const {id}=req.params
                        if(!id) throw new Error("Id must be given ")

            const usecases=new DeactivateProvider(this.repo)
            const result=usecases.execute(id);
            res.status(200).json(normalizeProvider(result));
        } catch (error:any ) {
                        res.status(400).json({error:error.message})

        }
    }
}
