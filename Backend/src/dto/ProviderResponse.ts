export interface ProviderResponse {
  id: string;
  providerName: string;
  contactName: string;
  phone: string;
  email: string;
  address?: string | null;
  isActive: boolean;
}
