// src/routes/inventoryRoutes.ts
import { Router } from "express";
import { InventoryController } from "../controllers/InventoryController";
import { MongoInventoryRepository } from "../repositories/mongo/MongoInventoryRepository";

const router = Router();

// inject dependency (DIP)
const repo = new MongoInventoryRepository();
const controller = new InventoryController(repo);

import { auth, authorize } from "../middlewares/auth";


// === CRUD ===

// Manager+ can create/update inventory
router.post("/", auth, authorize(["manager", "admin"]), controller.create.bind(controller));
router.put("/:id", auth, authorize(["manager", "admin"]), controller.update.bind(controller));

// Admin only delete
router.delete("/:id", auth, authorize(["admin"]), controller.delete.bind(controller));

// Employees+ can view stock
router.get("/:id", auth, authorize(["employee", "manager", "admin"]), controller.get.bind(controller));
router.get("/", auth, authorize(["employee", "manager", "admin"]), controller.getAll.bind(controller));

// === Domain Behaviors ===

// Employees+ can adjust stock
router.patch("/:id/increase", auth, authorize(["employee", "manager", "admin"]), controller.increaseStock.bind(controller));
router.patch("/:id/decrease", auth, authorize(["employee", "manager", "admin"]), controller.decreaseStock.bind(controller));

// Employees+ can check reorder
router.get("/:id/reorder", auth, authorize(["employee", "manager", "admin"]), controller.checkReorder.bind(controller));




export default router;
