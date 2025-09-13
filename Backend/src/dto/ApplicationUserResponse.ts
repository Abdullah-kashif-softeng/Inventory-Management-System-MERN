export interface ApplicationUserResponse {
  id: string;                // _id from Mongo
  username: string;
  email: string;
  roleID: string;             // ref to Role
  shopID?: string | null;     // ref to Shop
  warehouseID?: string | null;// ref to Warehouse
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
