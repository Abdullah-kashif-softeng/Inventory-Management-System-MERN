import { RoleType } from "../../domain/Role";

export interface IRoleRepository {
  create(role: RoleType): Promise<RoleType>;
  update(id: string, role: RoleType): Promise<RoleType>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<RoleType | null>;
  findAll(): Promise<RoleType[]>;
}
