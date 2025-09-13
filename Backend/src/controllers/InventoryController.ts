// src/controllers/InventoryController.ts
import { Request, Response } from "express";
import { IInventoryRepository } from "../repositories/interfaces/IInventoryRepositry";

import { CreateInventory } from "../usecases/inventory/CreateInventory";
import { UpdateInventory } from "../usecases/inventory/UpdateInventory";
import { DeleteInventory } from "../usecases/inventory/DeleteInventory";
import { GetInventory } from "../usecases/inventory/GetInventory";
import { GetAllInventories } from "../usecases/inventory/GetAllInventories";
import { IncreaseStock } from "../usecases/inventory/IncreaseStock";
import { DecreaseStock } from "../usecases/inventory/DecreaseStock";
import { CheckReorder } from "../usecases/inventory/CheckReorder";

import { normalizeInventory } from "../utils/normalizers";

export class InventoryController {
  constructor(private repo: IInventoryRepository) {}

  async create(req: Request, res: Response) {
    try {
      const usecase = new CreateInventory(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(normalizeInventory(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const {id}=req.params
      if(!id) throw new Error("Id not given")
      const usecase = new UpdateInventory(this.repo);
      const result = await usecase.execute(id,req.body);
      res.json(normalizeInventory(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Inventory ID is required");

      const usecase = new DeleteInventory(this.repo);
      await usecase.execute(id);
      res.json({ message: "Deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Inventory ID is required");

      const usecase = new GetInventory(this.repo);
      const result = await usecase.execute(id);
      res.json(result ? normalizeInventory(result) : null);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const usecase = new GetAllInventories(this.repo);
      const result = await usecase.execute();
      res.json(result.map(normalizeInventory));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async increaseStock(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Inventory ID is required");

      const { amount } = req.body;
      if (typeof amount !== "number") throw new Error("Amount must be a number");

      const usecase = new IncreaseStock(this.repo);
      const result = await usecase.execute(id, amount);
      res.json(normalizeInventory(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async decreaseStock(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Inventory ID is required");

      const { amount } = req.body;
      if (typeof amount !== "number") throw new Error("Amount must be a number");

      const usecase = new DecreaseStock(this.repo);
      const result = await usecase.execute(id, amount);
      res.json(normalizeInventory(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async checkReorder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Inventory ID is required");

      const usecase = new CheckReorder(this.repo);
      const result = await usecase.execute(id);
      res.json({ needsReorder: result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
