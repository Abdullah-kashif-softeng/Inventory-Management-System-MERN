export interface RoleResponseDTO {
  id: string;
  name: string;
  description: string | null;   // ✅ allow null
  permissions: string[];
  isDefault: boolean;
}