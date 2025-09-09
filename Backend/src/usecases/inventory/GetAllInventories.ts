// usecases/GetAllInventories.ts
import { MongoInventoryRepository } from "../../repositories/mongo/MongoInventoryRepository";


export class GetAllInventories {
  constructor(private repo: MongoInventoryRepository) {}

  async execute() {
    return await this.repo.findAll();
  }
}
