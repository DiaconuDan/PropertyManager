import React, { FunctionComponent, Fragment } from "react";
import { TApplicantList } from "../types";
import ApplicantCard from "./ApplicantCard";
import { RowWrapper, RowStatus } from "./styles";
import { getApplicantRowStatus } from "./utils";

type ApplicantRowProps = {
  applicants: TApplicantList;
};

const ApplicantRow: FunctionComponent<ApplicantRowProps> = ({ applicants }) => {
  if (!applicants.length) {
    return <Fragment />;
  }

  const rowStatus = getApplicantRowStatus(applicants);

  return (
    <Fragment>
      <RowStatus> {rowStatus} </RowStatus>
      <RowWrapper>
        {applicants.map((applicant) => {
          return <ApplicantCard applicant={applicant}></ApplicantCard>;
        })}
      </RowWrapper>
    </Fragment>
  );
};

export default ApplicantRow;
