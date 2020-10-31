import React, { FunctionComponent } from "react";
import styled from "styled-components";
import "react-notifications/lib/notifications.css";
import ClipLoader from "react-spinners/ClipLoader";
import { NotificationContainer } from "react-notifications";
import useRequest from "../hooks/request/useRequest";
import useQueryString from "../hooks/query/useQueryString";
import { Applicant } from "./types";

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

  const queriedApplicants = query
    ? applicants?.filter((applicant: Applicant) => {
        return (
          applicant.firstName.toLowerCase().includes(query.toLowerCase()) ||
          applicant.lastName.toLowerCase().includes(query.toLowerCase()) ||
          applicant.email.toLowerCase().includes(query.toLowerCase())
        );
      })
    : applicants;

  return (
    <Wrapper>
      <NotificationContainer />
      <input
        type="text"
        value={query}
        onChange={(e) => onSetValue(e.target.value)}
      ></input>
      <ClipLoader size={50} color={"#36D7B7"} loading={isLoading} />
      {!isLoading && !isError && queriedApplicants && (
        <div> {queriedApplicants[0]?.firstName} </div>
      )}
    </Wrapper>
  );
};

export default PropertyView;
