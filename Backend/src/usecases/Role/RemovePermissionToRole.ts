// src/usecases/role/RemovePermissionFromRole.ts
import { IRoleRepository } from "../../repositories/interfaces/IRoleRepositry";
import { Role } from "../../domain/Role";

export class RemovePermissionFromRole {
  constructor(private repo: IRoleRepository) {}

  async execute(id: string, permission: string) {
    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Role not found");

    const entity = new Role(existing);
    entity.removePermission(permission);

    return await this.repo.update(id, entity);
  }
}
