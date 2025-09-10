// src/routes/productRoutes.ts
import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { MongoProductRepository } from "../repositories/mongo/MongoProductRepositry";

const router = Router();

// inject dependency (DIP)
const repo = new MongoProductRepository();
const controller = new ProductController(repo);

router.post("/", controller.create.bind(controller));
router.put("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));
router.get("/:id", controller.get.bind(controller));
router.get("/", controller.getAll.bind(controller));

export default router;
