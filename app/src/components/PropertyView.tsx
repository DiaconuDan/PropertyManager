import React, { FunctionComponent, useState,useEffect } from "react";
import styled from "styled-components";
import "react-notifications/lib/notifications.css";
import ClipLoader from "react-spinners/ClipLoader";
import { NotificationContainer } from "react-notifications";
import useRequest from "../hooks/request/useRequest";
import useQueryString from "../hooks/query/useQueryString";
import useQueryApplicants from "../hooks/query/useQueryApplicants";
import { Applicant, TApplicantList } from "./types";

const Wrapper = styled.div`
  left: 0;
  line-height: 200px;
  margin-top: -100px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
`;

const PropertyView: FunctionComponent = () => {
  const { applicants, isLoading, isError } = useRequest(
    "https://5f9d70d76dc8300016d57b8a.mockapi.io/applicants"
  );
  const [query, onSetValue] = useQueryString("search", "");
  // const [queriedApplicants] = useQueryApplicants(applicants, query);

  // const [queriedApplicants, setQueriedApplicants] = useState<TApplicantList>([]);
 
  const searchedApplicants = applicants.length > 0 && applicants.filter((applicant:Applicant) => {
    return (
      applicant.firstName.toLowerCase().includes(query.toLowerCase()) ||
      applicant.lastName.toLowerCase().includes(query.toLowerCase()) ||
      applicant.email.toLowerCase().includes(query.toLowerCase())
    );
  });

  console.log("searched app", searchedApplicants);

  if (query) {
    console.warn("avem query");
  } else {
    console.warn("nu avem query");
  }


  return (
    <Wrapper>
      <NotificationContainer />
      <input
        type="text"
        value={query}
        onChange={(e) => onSetValue(e.target.value)}
      ></input>
      <ClipLoader size={50} color={"#36D7B7"} loading={isLoading} />
      {!isLoading && !isError && applicants.length > 0 && (
        <div> {applicants[0].firstName} </div>
      )}
    </Wrapper>
  );
};

export default PropertyView;
