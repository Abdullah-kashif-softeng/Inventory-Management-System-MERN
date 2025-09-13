import { ProviderType } from "../../domain/Provider";

export interface IProviderRepository {
  create(provider: ProviderType): Promise<ProviderType>;
  update(id:string, provider: ProviderType): Promise<ProviderType>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ProviderType | null>;
  findAll(): Promise<ProviderType[]>;
}
