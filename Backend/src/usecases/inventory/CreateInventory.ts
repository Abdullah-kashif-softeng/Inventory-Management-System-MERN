// usecases/CreateInventory.ts
import { MongoInventoryRepository} from "../../repositories/mongo/MongoInventoryRepository";
import { Inventory, InventoryType } from "../../domain/Inventory";

export class CreateInventory {
  constructor(private repo: MongoInventoryRepository) {}

  async execute(data: InventoryType) {
    if (!data.shopID) throw new Error("Shop ID is required");
    if (data.quantityAvailable < 0) throw new Error("Quantity cannot be negative");

    const entity = new Inventory(data);
    return await this.repo.create(entity);
  }
}
