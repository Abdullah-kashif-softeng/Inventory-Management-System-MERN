// src/routes/productRoutes.ts
import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { MongoProductRepository } from "../repositories/mongo/MongoProductRepositry";

const router = Router();

// inject dependency (DIP)
const repo = new MongoProductRepository();
const controller = new ProductController(repo);


import { auth, authorize } from "../middlewares/auth";


// === CRUD ===

// Manager+ can create/update
router.post("/", auth, authorize(["manager", "admin"]), controller.create.bind(controller));
router.put("/:id", auth, authorize(["manager", "admin"]), controller.update.bind(controller));

// Admin only delete
router.delete("/:id", auth, authorize(["admin"]), controller.delete.bind(controller));

// Employees+ can view
router.get("/:id", auth, authorize(["employee", "manager", "admin"]), controller.get.bind(controller));
router.get("/", auth, authorize(["employee", "manager", "admin"]), controller.getAll.bind(controller));

// === Domain Behaviors ===

// Manager+ can manage catalog details
router.patch("/:id/rename", auth, authorize(["manager", "admin"]), controller.renameProduct.bind(controller));
router.patch("/:id/description", auth, authorize(["manager", "admin"]), controller.updateProductDescription.bind(controller));
router.patch("/:id/reorder-quantity", auth, authorize(["manager", "admin"]), controller.setReorderQuantity.bind(controller));


export default router;
