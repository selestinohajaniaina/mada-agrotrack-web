export type CultivatorType = 'INDIVIDUAL' | 'ORGANIZATION';
export type CultivatorStatus = 'ACTIVE' | 'ARCHIVED' | 'DRAFT';

export interface MediaReference { id: string; label: string; url: string; kind: 'IDENTITY' | 'CIN_FRONT' | 'CIN_BACK' | 'DOCUMENT'; }
interface CultivatorBase { id: string; code: string; type: CultivatorType; status: CultivatorStatus; createdAt: string; updatedAt: string; source: 'MOBILE' | 'WEB_DEMO'; region: string; }
export interface IndividualCultivator extends CultivatorBase {
  type: 'INDIVIDUAL'; identity: { lastName: string; firstName: string; birthDate: string; cinIssueDate: string; cinIssuePlace: string; };
  contact: { primaryPhone: string; secondaryPhone: string; email?: string; };
  media: { identityPhoto: MediaReference; cinFront: MediaReference; cinBack: MediaReference; };
}
export interface OrganizationCultivator extends CultivatorBase {
  type: 'ORGANIZATION'; organization: { officialName: string; acronym: string; organizationType: string; registrationNumber: string; creationDate: string; mainPurpose: string; description: string; };
  location: { address: string; region: string; district: string; commune: string; fokontany: string; };
  contact: { primaryPhone: string; secondaryPhone: string; email: string; };
  representative: { lastName: string; firstName: string; role: string; phone: string; photo?: MediaReference; identityDetails?: string; };
  documents: MediaReference[];
  agriculture: { memberCount: number | null; mainActivities: string[]; interventionAreas: string[]; mainProductions: string[]; additionalInformation: string; };
}
export type Cultivator = IndividualCultivator | OrganizationCultivator;
export const cultivatorName = (item: Cultivator): string => item.type === 'INDIVIDUAL' ? `${item.identity.firstName} ${item.identity.lastName}` : item.organization.officialName;
export const cultivatorPhone = (item: Cultivator): string => item.contact.primaryPhone;
export const cultivatorLocation = (item: Cultivator): string => item.type === 'INDIVIDUAL' ? item.region : `${item.location.commune}, ${item.location.region}`;
