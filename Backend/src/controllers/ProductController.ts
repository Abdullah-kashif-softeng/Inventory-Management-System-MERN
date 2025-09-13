// src/controllers/ProductController.ts
import { Request, Response } from "express";
import { ProductRepository } from "../repositories/interfaces/IProductRepositry";

import { CreateProduct } from "../usecases/product/CreateProduct";
import { UpdateProduct } from "../usecases/product/UpdateProduct";
import { DeleteProduct } from "../usecases/product/DeleteProduct";
import { GetProduct } from "../usecases/product/GetProduct";
import { GetAllProducts } from "../usecases/product/GetAllProducts";

import { normalizeProduct } from "../utils/normalizers";
import { RenameProduct } from '../usecases/product/RenameProduct';

import { UpdateProductDescription } from '../usecases/product/UpdateProductDescription';

import { SetReorderQuantity } from '../usecases/product/SetReorderQuantity';

export class ProductController {
  constructor(private repo: ProductRepository) {}

  async create(req: Request, res: Response) {
    try {
      const usecase = new CreateProduct(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(normalizeProduct(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
  try {
    const { id } = req.params;  // ✅ correct destructuring
    if (!id) throw new Error("Product ID is required");
    
    const usecase = new UpdateProduct(this.repo);
    const result = await usecase.execute(id, req.body);
    res.json(normalizeProduct(result));
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}


  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Product ID is required");

      const usecase = new DeleteProduct(this.repo);
      await usecase.execute(id);
      res.json({ message: "Deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Product ID is required");

      const usecase = new GetProduct(this.repo);
      const result = await usecase.execute(id);
      res.json(result ? normalizeProduct(result) : null);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const usecase = new GetAllProducts(this.repo);
      const result = await usecase.execute();
      res.json(result.map(normalizeProduct));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
  async renameProduct(req:Request,res:Response){
      try {
         const { id } = req.params;
      const { newName } = req.body;

      if (!id) throw new Error("Warehouse ID is required");
      if (!newName) throw new Error("New name is required");


        const usecase=new RenameProduct(this.repo)
        const result=await usecase.execute(id,newName)

        res.json(normalizeProduct(result))
      } catch (error:any) {
        res.status(400).json({error:error.message})
      }
  }

  async updateProductDescription(req:Request,res:Response){
    try{
      
      const {id}=req.params
      const {desc}=req.body

      if(!id) throw new Error("The id is must to update")
      
      if(!desc) throw new Error("The description must be given")
      const usecase=new UpdateProductDescription(this.repo)
      const result=await usecase.execute(id,desc)
      res.status(200).json(normalizeProduct(result))
    }catch(err:any){
     res.status(400).json({error:err.message})
    }
  }

  async setReorderQuantity(req:Request,res:Response){
    try{
       const {id}=req.params
       const {qty}=req.body

       if(!id) throw new Error("The id is needed")
       if(!qty) throw new Error("The qty is empty")
      
        const usecase=new SetReorderQuantity(this.repo)
        const result=await usecase.execute(id,qty)
        res.status(200).json(normalizeProduct(result))
  }
  catch(err:any){
    res.status(400).json({error:err.message})
  }
  }
}