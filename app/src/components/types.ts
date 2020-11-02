export type TApplicantList = Applicant[];

export enum Status {
  Appointment_Set = "Appointment_Set",
  Property_Viewed = "Property_Viewed",
  Interested = "Interested",
  Offer_Accepted = "Offer_Accepted",
}

export interface Applicant {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  date: Date;
  status: Status;
  bid?: number;
}
