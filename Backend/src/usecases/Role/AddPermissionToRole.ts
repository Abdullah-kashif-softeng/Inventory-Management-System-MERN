// src/usecases/role/AddPermissionToRole.ts
import { IRoleRepository } from "../../repositories/interfaces/IRoleRepositry";
import { Role } from "../../domain/Role";

export class AddPermissionToRole {
  constructor(private repo: IRoleRepository) {}

  async execute(id: string, permission: string) {
    if (!permission?.trim()) throw new Error("Permission is required");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Role not found");

    const entity = new Role(existing);
    entity.addPermission(permission);

    return await this.repo.update(id, entity);
  }
}
