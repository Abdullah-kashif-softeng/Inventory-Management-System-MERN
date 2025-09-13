import { IApplicationUserRepository } from "../../repositories/interfaces/IApplicationUserRepositry";
import { ApplicationUser, ApplicationUserType } from "../../domain/ApplicationUser";

export class CreateUser {
  constructor(private repo: IApplicationUserRepository) {}

  async execute(data: ApplicationUserType) {
    const entity = new ApplicationUser(data);
    return await this.repo.create(entity);
  }
}
