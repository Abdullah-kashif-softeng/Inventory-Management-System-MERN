import { Request, Response } from "express";
import { IWarehouseRepository } from "../repositories/interfaces/IWarehouseRepositry";

import { CreateWarehouse } from "../usecases/warehouse/CreateWarehouse";
import { UpdateWarehouse } from "../usecases/warehouse/UpdateWarehouse";
import { DeleteWarehouse } from "../usecases/warehouse/DeleteWarehouse";
import { GetWarehouse } from "../usecases/warehouse/GetWarehouse";
import { GetAllWarehouses } from "../usecases/warehouse/GetAllWarehouses";

import { RenameWarehouse } from "../usecases/warehouse/RenameWareHouse";
import { ActivateWarehouse } from "../usecases/warehouse/ActivateWarehouse";
import { DeactivateWarehouse } from "../usecases/warehouse/DeactivateWarehouse";

import { normalizeWarehouse } from "../utils/normalizers";

export class WarehouseController {
  constructor(private repo: IWarehouseRepository) {}

  async create(req: Request, res: Response) {
    try {
      const usecase = new CreateWarehouse(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(normalizeWarehouse(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const {id}=req.params
      if(!id) throw new Error("Id needed")
      const usecase = new UpdateWarehouse(this.repo);
      const result = await usecase.execute(id,req.body);
      res.json(normalizeWarehouse(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Warehouse ID is required");

      const usecase = new DeleteWarehouse(this.repo);
      await usecase.execute(id);
      res.json({ message: "Deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Warehouse ID is required");

      const usecase = new GetWarehouse(this.repo);
      const result = await usecase.execute(id);
      res.json(result ? normalizeWarehouse(result) : null);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const usecase = new GetAllWarehouses(this.repo);
      const result = await usecase.execute();
      res.json(result.map(normalizeWarehouse));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async rename(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { newName } = req.body;
      if (!id) throw new Error("Warehouse ID is required");
      if (!newName) throw new Error("New name is required");

      const usecase = new RenameWarehouse(this.repo);
      const result = await usecase.execute(id, newName);
      res.json(normalizeWarehouse(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async activate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Warehouse ID is required");

      const usecase = new ActivateWarehouse(this.repo);
      const result = await usecase.execute(id);
      res.json(normalizeWarehouse(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deactivate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Warehouse ID is required");

      const usecase = new DeactivateWarehouse(this.repo);
      const result = await usecase.execute(id);
      res.json(normalizeWarehouse(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
  
}
