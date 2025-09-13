import { IRoleRepository } from "../../repositories/interfaces/IRoleRepositry";

export class GetRole {
  constructor(private repo: IRoleRepository) {}

  async execute(id: string) {
    if (!id) throw new Error("Role ID is required");
    return await this.repo.findById(id);
  }
}
