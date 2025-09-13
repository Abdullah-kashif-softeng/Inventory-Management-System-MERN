import { IInventoryRepository } from '../../repositories/interfaces/IInventoryRepositry';
// usecases/GetAllInventories.ts



export class GetAllInventories {
  constructor(private repo: IInventoryRepository) {}

  async execute() {
    return await this.repo.findAll();
  }
}
