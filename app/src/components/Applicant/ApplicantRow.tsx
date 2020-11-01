import React, { FunctionComponent, Fragment } from "react";
import { TApplicantList } from "../types";
import styled from "styled-components";
import ApplicantCard from "./ApplicantCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Status = styled.div`
  color: #4a4a4a;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  padding-top: 15px;
  padding-bottom:15px;
`;

type ApplicantRowProps = {
  applicants: TApplicantList;
};

const ApplicantRow: FunctionComponent<ApplicantRowProps> = ({ applicants }) => {
  if (!applicants.length) {
    return <Fragment />;
  }

  const status = applicants[0].status.replace("_", " ");

  return (
    <Fragment>
      <Status> {status} </Status>
      <Wrapper>
      {applicants.map((applicant) => {
        return <ApplicantCard applicant={applicant}></ApplicantCard>;
      })}
      </Wrapper>
    </Fragment>
  );
};

export default ApplicantRow;
