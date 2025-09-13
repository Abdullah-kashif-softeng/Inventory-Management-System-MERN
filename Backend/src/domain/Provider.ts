import { Types } from "mongoose"

export interface ProviderType{
    
    providerName:string;
    email:string;
    phone:string;
    address:string
    activeStatus:boolean
}

export class Provider implements ProviderType{

    
    providerName:string;
    email:string;
    phone:string;
    address:string
    activeStatus: boolean;
    constructor(data:ProviderType){
        if (!data.providerName?.trim()) throw new Error("Provider name is required");
    
    if (!data.phone?.trim()) throw new Error("Phone number is required");
    if (!data.email?.trim()) throw new Error("Email is required");
   
    this.providerName=data.providerName.trim()
    this.email=data.email.trim()
    this.phone=data.phone.trim()
    this.address=data.address.trim()
    this.activeStatus=data.activeStatus
    }



    rename(newName: string) {
    if (!newName.trim()) throw new Error("Provider name required");
    this.providerName = newName.trim();
  }

  deactivate() {
    if(this.activeStatus===true) this.activeStatus = false;
  }

  activate() {
    if(this.activeStatus===false) this.activeStatus = true;
  }
}