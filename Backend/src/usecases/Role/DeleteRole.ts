import { IRoleRepository } from "../../repositories/interfaces/IRoleRepositry";

export class DeleteRole {
  constructor(private repo: IRoleRepository) {}

  async execute(id: string) {
    if (!id) throw new Error("Role ID is required");
    await this.repo.delete(id);
  }
}
