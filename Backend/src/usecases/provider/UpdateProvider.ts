import { IProviderRepository } from "../../repositories/interfaces/IProviderRepositry";
import { Provider, ProviderType } from "../../domain/Provider";

export class UpdateProvider {
  constructor(private repo: IProviderRepository) {}

  async execute(id: string, data: ProviderType) {
    if (!id) throw new Error("Provider ID is required");

    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Provider not found");

    const entity = new Provider({ ...existing, ...data });
    return await this.repo.update(id, entity);
  }
}
