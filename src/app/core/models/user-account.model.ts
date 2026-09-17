export type UserRole = 'TECHNICIAN' | 'ADMIN' | 'SUPER_ADMIN' | 'EXTERNAL';
export type UserStatus = 'ACTIVE' | 'INACTIVE';
export interface UserAccount { id: string; firstName: string; lastName: string; email: string; identifier: string; role: UserRole; externalType?: 'FOURNISSEUR' | 'BAILLEUR' | 'INVESTISSEUR'; status: UserStatus; createdAt: string; lastActivity: string; phone: string; region: string; }
export const roleLabels: Record<UserRole, string> = { TECHNICIAN: 'Technicien mobile', ADMIN: 'Administrateur', SUPER_ADMIN: 'Super Administrateur', EXTERNAL: 'Acteur externe' };
export const rolePermissions: Record<UserRole, string[]> = {
  SUPER_ADMIN: ['Cultivateurs : consulter et modifier', 'Cultivateurs : archiver', 'Comptes : créer et gérer', 'Administrateurs : gérer', 'Configuration générale'],
  ADMIN: ['Cultivateurs : consulter et modifier', 'Cultivateurs : archiver selon attribution', 'Comptes : consulter selon attribution'],
  TECHNICIAN: ['Collecte mobile', 'Fiches autorisées', 'Travail hors connexion'],
  EXTERNAL: ['Consultation limitée au périmètre attribué']
};
