import { IRoleRepository } from "../../repositories/interfaces/IRoleRepositry";

export class GetAllRoles {
  constructor(private repo: IRoleRepository) {}

  async execute() {
    return await this.repo.findAll();
  }
}
