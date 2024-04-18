export interface personInfo {
  firstName: string;
  lastName: string;
  customerID: number;
  note: string | null;
  profession: 'student'|'freelancer'|'productOwner'|
  'engineer' |'systemAnalytics';
}

