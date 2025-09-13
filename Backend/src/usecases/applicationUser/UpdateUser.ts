import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser, ApplicationUserType } from "../../domain/ApplicationUser";

export class UpdateApplicationUser {
  constructor(private repo: IApplicationUserRepository) {}

  async execute(id: string, data: ApplicationUserType) {
    if (!id) throw new Error("ApplicationUser ID is required");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("ApplicationUser not found");

    const entity = new ApplicationUser({ ...existing, ...data });
    return await this.repo.update(id, entity);
  }
}
