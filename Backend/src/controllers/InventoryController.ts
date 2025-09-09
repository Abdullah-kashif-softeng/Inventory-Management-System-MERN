// controllers/InventoryController.ts
import { Request, Response } from "express";

import { MongoInventoryRepository } from "../repositories/mongo/MongoInventoryRepository";

import { CreateInventory } from "../usecases/inventory/CreateInventory";
import { UpdateInventory } from "../usecases/inventory/UpdateInventory";
import { DeleteInventory } from "../usecases/inventory/DeleteInventory";
import { GetInventory } from "../usecases/inventory/GetInventory";
import { GetAllInventories } from "../usecases/inventory/GetAllInventories";
import { IncreaseStock } from "../usecases/inventory/IncreaseStock";
import { DecreaseStock } from "../usecases/inventory/DecreaseStock";
import { CheckReorder } from "../usecases/inventory/CheckReorder";
// import { GetStockStatus } from "../usecases/GetStockStatus";
function normalizeInventory(inv: any) {
  return {
    ...inv,
    id: inv.id?.toString(),
    shopID: inv.shopID?.toString(),
    productID: inv.productID?.toString(),
    warehouseID: inv.warehouseID?.toString(),
  };
}

export class InventoryController {
  private repo = new MongoInventoryRepository();

  async create(req: Request, res: Response) {
    try {
      const usecase = new CreateInventory(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(normalizeInventory(result)); // result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const usecase = new UpdateInventory(this.repo);
      const result = await usecase.execute({ ...req.body, id: req.params.id });
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
      res.json(normalizeInventory(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const usecase = new GetAllInventories(this.repo);
      const result = await usecase.execute();
      res.json(normalizeInventory(result));
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
  }async decreaseStock(req: Request, res: Response) {
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
//   async getStatus(req: Request, res: Response) {
//     try {
//       const usecase = new GetStockStatus(this.repo);
//       const result = await usecase.execute(req.params.id);
//       res.json({ status: result });
//     } catch (error: any) {
//       res.status(400).json({ error: error.message });
//     }
//   }
}
