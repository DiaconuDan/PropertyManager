import React, { FunctionComponent } from "react";
import styled from "styled-components";
import "react-notifications/lib/notifications.css";
import ClipLoader from "react-spinners/ClipLoader";
import { NotificationContainer } from "react-notifications";
import useRequest from "../hooks/request/useRequest";
import useQueryString from "../hooks/queryString/useQueryString";
import { Status } from "./types";
import { queryApplicants } from "../hooks/queryString/utils";
import ApplicantRow from "./ApplicantRow";
import SearchInput from "./SearchInput";

const Wrapper = styled.div`
  padding-top: 30px;
  line-height: 100px;
  padding-left: 40px;
`;

const PropertyView: FunctionComponent = () => {
  const { applicants, isLoading, isError } = useRequest(
    "https://5f9d70d76dc8300016d57b8a.mockapi.io/applicants"
  );
  const [query, onSetValue] = useQueryString("search", "");

  const queriedApplicants = queryApplicants(query, applicants);

  const ApplicantsByStatus = Object.values(Status).map((status) => {
    return queriedApplicants.filter((applicant) => applicant.status === status);
  });

  return (
    <div>
      <NotificationContainer />
      <SearchInput
        value={query}
        onChange={(e) => onSetValue(e.target.value)}
      />
      <Wrapper>
        <ClipLoader size={50} color={"#36D7B7"} loading={isLoading} />
        {!isLoading &&
          !isError &&
          ApplicantsByStatus.map((rowApplicants, index) => {
            return <ApplicantRow key={index} applicants={rowApplicants} />;
          })}
      </Wrapper>
    </div>
  );
};

export default PropertyView;
