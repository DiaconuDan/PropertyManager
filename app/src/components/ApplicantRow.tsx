import React, { FunctionComponent, Fragment } from "react";
import { TApplicantList } from "./types";

type ApplicantRowProps = {
  applicants: TApplicantList;
};

const ApplicantRow: FunctionComponent<ApplicantRowProps> = ({ applicants }) => {
  if (!applicants.length) {
    return <Fragment />;
  }
  
  const status = applicants[0].status ;

  return <div>
        <h1> {status } </h1>
      {applicants.map(applicant=> {
          const fullName = applicant.firstName + ' ' + applicant.lastName ;
          return <div key={applicant.id}> {applicant.date} {fullName} {applicant.email} {applicant.phoneNumber} {applicant?.bid} </div>
      })}
  </div>


};

export default ApplicantRow;
