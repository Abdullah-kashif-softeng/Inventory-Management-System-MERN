import { ApplicationUserType } from "../../domain/ApplicationUser";

export interface IApplicationUserRepository {
  create(user: ApplicationUserType): Promise<ApplicationUserType>;
  update(id: string, user: ApplicationUserType): Promise<ApplicationUserType>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ApplicationUserType | null>;
  findAll(): Promise<ApplicationUserType[]>;
  findByEmail(email: string): Promise<ApplicationUserType | null>; // helpful for login
}
