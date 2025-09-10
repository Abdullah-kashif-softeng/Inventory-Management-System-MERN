// src/routes/inventoryRoutes.ts
import { Router } from "express";
import { InventoryController } from "../controllers/InventoryController";
import { MongoInventoryRepository } from "../repositories/mongo/MongoInventoryRepository";

const router = Router();

// inject dependency (DIP)
const repo = new MongoInventoryRepository();
const controller = new InventoryController(repo);

router.post("/", controller.create.bind(controller));
router.put("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));
router.get("/:id", controller.get.bind(controller));
router.get("/", controller.getAll.bind(controller));
router.patch("/:id/increase", controller.increaseStock.bind(controller));
router.patch("/:id/decrease", controller.decreaseStock.bind(controller));
router.get("/:id/reorder", controller.checkReorder.bind(controller));

export default router;
