import mongoose from "mongoose";
import bcrypt from "bcrypt";

import RoleModel from "../repositories/mongo/schemas/RoleSchema";
import ApplicationUserModel from "../repositories/mongo/schemas/ApplicationUser";


const MONGO_URI = "mongodb://127.0.0.1:27017/inventorymanagementsystem";

const defaultRoles = [
  {
    name: "customer",
    description: "Default customer role",
    permissions: ["inventory:view"],
    isDefault: true,
  },
  {
    name: "supplier",
    description: "Suppliers can view inventory and provide products",
    permissions: ["inventory:view", "product:view"],
  },
  {
    name: "employee",
    description: "Employees can manage inventory",
    permissions: ["inventory:view", "inventory:update", "inventory:create"],
  },
  {
    name: "manager",
    description: "Managers can manage warehouses and products",
    permissions: [
      "inventory:view",
      "inventory:update",
      "inventory:create",
      "warehouse:manage",
      "product:manage",
    ],
  },
  {
    name: "admin",
    description: "System administrator with full access",
    permissions: ["*"], // wildcard for all
  },
];

async function seedRoles() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to DB");

    for (const role of defaultRoles) {
      const existing = await RoleModel.findOne({ name: role.name });
      if (existing) {
        console.log(`ℹ️ Role '${role.name}' already exists`);
        continue;
      }
      await RoleModel.create(role);
      console.log(`🚀 Role '${role.name}' created`);
    }

    console.log("✅ Roles seeding completed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding roles:", err);
    process.exit(1);
  }
}

seedRoles();