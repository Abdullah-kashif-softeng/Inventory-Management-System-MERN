import { IRoleRepository } from "../../repositories/interfaces/IRoleRepositry";
import { Role, RoleType } from "../../domain/Role";

export class CreateRole {
  constructor(private repo: IRoleRepository) {}

  async execute(data: RoleType) {
    const entity = new Role(data);
    return await this.repo.create(entity);
  }
}
