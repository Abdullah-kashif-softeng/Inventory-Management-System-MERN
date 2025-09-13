// src/domain/Role.ts
import { Types } from "mongoose";

export interface RoleType {
  name: string;                // e.g., "admin", "manager"
  description?: string;
  permissions: string[];       // keep simple for MVP, later link to Permission entity
  isDefault?: boolean;         // mark if this is a default role (e.g., customer)
}

export class Role implements RoleType {
  name: string;
  description?: string;
  permissions: string[];
  isDefault?: boolean;

  constructor(data: RoleType) {
    if (!data.name?.trim()) throw new Error("Role name is required");
    this.name = data.name.trim();
    this.description = data.description ?? "";
    this.permissions = data.permissions ?? [];
    this.isDefault = data.isDefault ?? false;
  }

  addPermission(permission: string) {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
    }
  }

  removePermission(permission: string) {
    this.permissions = this.permissions.filter(p => p !== permission);
  }
}
