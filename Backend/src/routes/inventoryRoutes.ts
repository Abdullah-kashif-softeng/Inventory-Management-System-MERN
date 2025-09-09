// routes/inventoryRoutes.ts
import express from "express";
import { InventoryController } from "../controllers/InventoryController";

const router= express.Router();
const controller = new InventoryController();

router.post("/", (req, res) => controller.create(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));
router.get("/:id", (req, res) => controller.get(req, res));
router.get("/", (req, res) => controller.getAll(req, res));
router.post("/:id/increase", (req, res) => controller.increaseStock(req, res));
router.post("/:id/decrease", (req, res) => controller.decreaseStock(req, res));
router.get("/:id/reorder", (req, res) => controller.checkReorder(req, res));
//router.get("/:id/status", (req, res) => controller.getStatus(req, res));

export default router;
