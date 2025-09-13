

import { Router } from "express";
import { ProviderController } from "../controllers/ProviderController";
import { MongoProviderRepository } from "../repositories/mongo/MongoProviderRepositry";

const router=Router()

const repo=new MongoProviderRepository()
const controller=new ProviderController(repo)


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

// Manager+ can rename
router.patch("/:id/rename", auth, authorize(["manager", "admin"]), controller.renameProvider.bind(controller));

// Admin only activate/deactivate
router.patch("/:id/activate", auth, authorize(["admin"]), controller.activate.bind(controller));
router.patch("/:id/deactivate", auth, authorize(["admin"]), controller.deactivate.bind(controller));




export default router;
