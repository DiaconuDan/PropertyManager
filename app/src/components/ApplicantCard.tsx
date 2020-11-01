import React, { FunctionComponent, Fragment } from "react";
import { Applicant } from "./types";
import styled from "styled-components";

const Wrapper = styled.div`
margin-left: 20px;
margin-right: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: 200px;
  width: 250px;
  left: 74px;
  top: 301px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 4px;
  flex-direction: row;  
  
`;

const CardContent = styled.div`

`;

const FullName = styled.div`

`;
const PhoneNumber = styled.div`flex:2`;
const Date = styled.div`flex:3`;
const Bid = styled.div``;

type ApplicantCardProps = {
  applicant: Applicant;
};

const ApplicantCard: FunctionComponent<ApplicantCardProps> = ({
  applicant,
}) => {
  if (!applicant) {
    return <Fragment />;
  }

  return (
    <Wrapper>
        
    <Card>
      <CardContent>

    
      <FullName>{applicant.firstName + " " + applicant.lastName}</FullName>
      <PhoneNumber>{applicant.phoneNumber}</PhoneNumber>
      <Date> {applicant.date} </Date>
      {applicant.bid && <Bid> BID {applicant.bid}</Bid>}
        </CardContent>
    </Card>
    </Wrapper>
  );
};

export default ApplicantCard;
