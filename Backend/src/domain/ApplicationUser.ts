
import { Types } from "mongoose";

export interface ApplicationUserType{
    username:string;
    email:string;
    password:string;
    roleID: string|Types.ObjectId
    shopID:string|Types.ObjectId
    warehouseID:string|Types.ObjectId
    isActive:boolean
}

export class ApplicationUser implements ApplicationUserType{
    username: string;
    email: string;
    password: string;
    roleID: string | Types.ObjectId;
    shopID: string | Types.ObjectId;
    warehouseID: string | Types.ObjectId;
    isActive: boolean;

    constructor(data:ApplicationUserType){

        if (!data.username?.trim()) throw new Error("Username is required");
    if (!data.email?.trim()) throw new Error("Email is required");
    if (!data.password?.trim()) throw new Error("Password is required");
    if (!data.roleID) throw new Error("Role ID is required");

        this.username=data.username
        this.email=data.email
        this.password=data.password
        this.roleID=data.roleID
        this.shopID=data.shopID
        this.warehouseID=data.warehouseID
        this.isActive=data.isActive
    }

     // === Behaviors ===
  deactivate() {
    if(this.isActive===true)
    this.isActive = false;
  }

  activate() {
    if(this.isActive===false)
    this.isActive = true;
  }

  changePassword(newPassword: string) {
    if (!newPassword.trim()) throw new Error("Password cannot be empty");
    this.password = newPassword; // hash will happen later
  }

  changeRole(newRoleID: string | Types.ObjectId) {
    if (!newRoleID) throw new Error("Role ID cannot be empty");
    this.roleID = newRoleID;
  }
}