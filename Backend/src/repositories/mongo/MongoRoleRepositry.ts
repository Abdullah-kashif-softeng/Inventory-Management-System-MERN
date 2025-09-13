import RoleModel, { RoleDocument } from "./schemas/RoleSchema";
import { IRoleRepository } from "../interfaces/IRoleRepositry";
import { RoleType } from "../../domain/Role";

export class MongoRoleRepository implements IRoleRepository {
  async create(role: RoleType): Promise<RoleType> {
    const doc = await RoleModel.create(role);
    return doc.toObject() as RoleType;
  }

  async update(id: string, role: RoleType): Promise<RoleType> {
    const doc = await RoleModel.findByIdAndUpdate(id, role, { new: true });
    if (!doc) throw new Error("Role not found");
    return doc.toObject() as RoleType;
  }

  async delete(id: string): Promise<void> {
    const doc = await RoleModel.findByIdAndDelete(id);
    if (!doc) throw new Error("Role not found");
  }

  async findById(id: string): Promise<RoleType | null> {
    const doc = await RoleModel.findById(id);
    return doc ? (doc.toObject() as RoleType) : null;
  }

  async findAll(): Promise<RoleType[]> {
    const docs = await RoleModel.find();
    return docs.map((d) => d.toObject() as RoleType);
  }
}
