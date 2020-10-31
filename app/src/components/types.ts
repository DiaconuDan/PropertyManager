export type  TApplicantList = Applicant[] ;
  
export enum Status {
    Appointment_Set, 
    Property_Viewed, 
    Interested,
    Offer_Accepted
}

export interface Applicant {
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    date: Date,
    status: Status,
    bid?:number,
}