// src/controllers/RoleController.ts
import { Request, Response } from "express";
import { IRoleRepository } from "../repositories/interfaces/IRoleRepositry";

import { CreateRole } from "../usecases/Role/CreateRole";
import { UpdateRole } from "../usecases/Role/UpdateRole";
import { DeleteRole } from "../usecases/Role/DeleteRole";
import { AddPermissionToRole } from "../usecases/Role/AddPermissionToRole";
import { RemovePermissionFromRole } from "../usecases/Role/RemovePermissionToRole";

import { normalizeRole } from "../utils/normalizers";

export class RoleController {
  constructor(private repo: IRoleRepository) {}

  async create(req: Request, res: Response) {
    try {
      const usecase = new CreateRole(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(normalizeRole(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Role ID is required");

      const usecase = new UpdateRole(this.repo);
      const result = await usecase.execute(id, req.body);
      res.json(normalizeRole(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Role ID is required");

      const usecase = new DeleteRole(this.repo);
      await usecase.execute(id);
      res.json({ message: "Deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async addPermission(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { permission } = req.body;
      if (!id) throw new Error("Role ID is required");
      if (!permission) throw new Error("Permission is required");

      const usecase = new AddPermissionToRole(this.repo);
      const result = await usecase.execute(id, permission);
      res.json(normalizeRole(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async removePermission(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { permission } = req.body;
      if (!id) throw new Error("Role ID is required");
      if (!permission) throw new Error("Permission is required");

      const usecase = new RemovePermissionFromRole(this.repo);
      const result = await usecase.execute(id, permission);
      res.json(normalizeRole(result));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
