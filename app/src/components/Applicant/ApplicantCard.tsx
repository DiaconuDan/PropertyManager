import React, { FunctionComponent, Fragment } from "react";
import { Applicant } from "../types";
import { Card } from "./styles";
import Avatar from "react-avatar";
import { getApplicantStatusDate } from "./utils";
import { FullName, PhoneNumber, Email, DateWrapper, Date, Bid } from "./styles";

type ApplicantCardProps = {
  applicant: Applicant;
};

const ApplicantCard: FunctionComponent<ApplicantCardProps> = ({
  applicant,
}) => {
  if (!applicant) {
    return <Fragment />;
  }

  const statusDate = getApplicantStatusDate(applicant.status, applicant.date);
  const fullName = applicant.firstName + " " + applicant.lastName;
  const bid = applicant.bid
    ? applicant.bid && "BID " + applicant.bid + "€"
    : "";

  return (
    <Card>
      <Avatar size={"50px"} round name={fullName} />
      <FullName> {fullName}</FullName>
      <PhoneNumber>{applicant.phoneNumber}</PhoneNumber>
      <Email> {applicant.email} </Email>
      <DateWrapper>
        <Date>{statusDate}</Date>
      </DateWrapper>
      {bid && <Bid>{bid}</Bid>}
    </Card>
  );
};

export default ApplicantCard;
