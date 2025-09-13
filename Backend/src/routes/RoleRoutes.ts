import { Router } from "express";
import { RoleController } from "../controllers/RoleController";
import { auth, authorize } from "../middlewares/auth";
import { MongoRoleRepository } from "../repositories/mongo/MongoRoleRepositry";
const router = Router();
const repo=new MongoRoleRepository()
const controller = new RoleController(repo);

// Roles management (admin only)
router.post("/", auth, authorize(["admin"]), controller.create.bind(controller));
router.put("/:id", auth, authorize(["admin"]), controller.update.bind(controller));
router.delete("/:id", auth, authorize(["admin"]), controller.delete.bind(controller));

router.post("/:id/permissions", auth, authorize(["admin"]), controller.addPermission.bind(controller));
router.delete("/:id/permissions", auth, authorize(["admin"]), controller.removePermission.bind(controller));

export default router;
