import { UserAccount } from '../core/models/user-account.model';
export const USERS_MOCK: UserAccount[] = [
  { id: 'u1', firstName: 'Hery', lastName: 'Rakoto Démo', email: 'hery.admin@example.test', identifier: 'HRAKOTO', role: 'SUPER_ADMIN', status: 'ACTIVE', createdAt: '2026-01-10', lastActivity: 'Aujourd’hui, 08:42', phone: '034 00 100 01', region: 'Analamanga' },
  { id: 'u2', firstName: 'Fara', lastName: 'Rasoa Test', email: 'fara.admin@example.test', identifier: 'FRASOA', role: 'ADMIN', status: 'ACTIVE', createdAt: '2026-02-14', lastActivity: 'Hier, 17:20', phone: '032 00 100 02', region: 'Vakinankaratra' },
  { id: 'u3', firstName: 'Tiana', lastName: 'Ravelona Démo', email: 'tiana.tech@example.test', identifier: 'TRAVELONA', role: 'TECHNICIAN', status: 'ACTIVE', createdAt: '2026-03-08', lastActivity: 'Aujourd’hui, 07:56', phone: '033 00 100 03', region: 'Alaotra-Mangoro' },
  { id: 'u4', firstName: 'Mamy', lastName: 'Andria Fictif', email: 'mamy.tech@example.test', identifier: 'MANDRIA', role: 'TECHNICIAN', status: 'INACTIVE', createdAt: '2026-03-21', lastActivity: '12 septembre 2026', phone: '034 00 100 04', region: 'Boeny' },
  { id: 'u5', firstName: 'Lova', lastName: 'Rajaona Test', email: 'lova.partenaire@example.test', identifier: 'LRAJAONA', role: 'EXTERNAL', externalType: 'BAILLEUR', status: 'ACTIVE', createdAt: '2026-05-04', lastActivity: '15 septembre 2026', phone: '032 00 100 05', region: 'Analamanga' },
  { id: 'u6', firstName: 'Noro', lastName: 'Rakoto Fictive', email: 'noro.invest@example.test', identifier: 'NRAKOTO', role: 'EXTERNAL', externalType: 'INVESTISSEUR', status: 'ACTIVE', createdAt: '2026-06-18', lastActivity: '10 septembre 2026', phone: '033 00 100 06', region: 'Itasy' }
];
