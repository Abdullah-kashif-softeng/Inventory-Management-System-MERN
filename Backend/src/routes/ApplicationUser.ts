import { Router } from "express";
import { ApplicationUserController } from "../controllers/ApplicationUserController";
import { MangoApplicationUserRepositry } from "../repositories/mongo/MongoApplicationUserRepository";
import { auth, authorize } from "../middlewares/auth";
import { assertHasUser } from "../utils/express";


const router = Router();

// Inject dependency
const repo = new MangoApplicationUserRepositry();
const controller = new ApplicationUserController(repo);

// === Public signup ===
router.post("/", controller.create.bind(controller));

// === Admin-only ===
router.get("/", auth, authorize(["admin"]), controller.getAllUsers.bind(controller));
router.get("/by-email", auth, authorize(["admin"]), controller.getUserByEmail.bind(controller));
router.delete("/:id", auth, authorize(["admin"]), controller.delete.bind(controller));
router.patch("/:id/activate", auth, authorize(["admin"]), controller.activate.bind(controller));
router.patch("/:id/deactivate", auth, authorize(["admin"]), controller.deactivate.bind(controller));
router.patch("/:id/change-role", auth, authorize(["admin"]), controller.changeRole.bind(controller));

// === Admin or self ===
router.get("/:id", auth, (req, res, next) => {
  assertHasUser(req); // ✅ TS now knows req.user exists
  if (req.user.role === "admin" || req.user.id === req.params.id) return next();
  return res.status(403).json({ message: "Forbidden" });
}, controller.get.bind(controller));

router.put("/:id", auth, (req, res, next) => {
  assertHasUser(req); // ✅ no more TS error
  if (req.user.role === "admin" || req.user.id === req.params.id) return next();
  return res.status(403).json({ message: "Forbidden" });
}, controller.update.bind(controller));

// === Password management ===
router.patch("/:id/change-password", auth, (req, res, next) => {
  assertHasUser(req); // ✅ safe
  if (req.user.role === "admin" || req.user.id === req.params.id) return next();
  return res.status(403).json({ message: "Forbidden" });
}, controller.changePassword.bind(controller));

export default router;
