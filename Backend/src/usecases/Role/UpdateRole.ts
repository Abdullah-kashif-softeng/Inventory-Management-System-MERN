import { IRoleRepository } from "../../repositories/interfaces/IRoleRepositry";
import { Role, RoleType } from "../../domain/Role";

export class UpdateRole {
  constructor(private repo: IRoleRepository) {}

  async execute(id: string, data: RoleType) {
    if (!id) throw new Error("Role ID is required");
    const existing=await this.repo.findById(id);
    const entity = new Role({...existing, ...data });
    return await this.repo.update(id, entity);
  }
}
