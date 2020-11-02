import { Applicant, Status, TApplicantList } from "../types";
import moment from "moment";

export const getApplicantStatusDate = (status: string, date: Date) => {
  const transformedDate = moment(date).format("MMM Do h:mm");
  if (status === Status.Appointment_Set) {
    return "APPOINTMENT " + transformedDate;
  }
  if (status === Status.Property_Viewed) {
    return "VIEWED " + transformedDate;
  }
  if (status === Status.Offer_Accepted) {
    return "ACCEPTED " + transformedDate;
  }
  return status + " " + transformedDate;
};

export const getApplicantRowStatus = (applicants: TApplicantList) => {
  const numberOfApplicants = applicants.length;

  if (!numberOfApplicants) {
    return "";
  }

  const applicantStatus = applicants[0].status;

  if (applicantStatus === Status.Appointment_Set) {
    return "Appointment set (" + numberOfApplicants + ")";
  }
  if (applicantStatus === Status.Property_Viewed) {
    return "Property viewed (" + numberOfApplicants + ")";
  }
  if (applicantStatus === Status.Offer_Accepted) {
    return "Offer accepted (" + numberOfApplicants + ")";
  }

  return applicantStatus + " (" + numberOfApplicants + ")";
};

export const getApplicantsByQuery = (
  query: string,
  applicants: TApplicantList
) => {
  return query
    ? applicants?.filter((applicant: Applicant) => {
        return (
          applicant.firstName.toLowerCase().includes(query.toLowerCase()) ||
          applicant.lastName.toLowerCase().includes(query.toLowerCase()) ||
          applicant.email.toLowerCase().includes(query.toLowerCase())
        );
      })
    : applicants;
};
