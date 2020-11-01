import React, { Fragment, FunctionComponent } from "react";
import styled from "styled-components";
import "react-notifications/lib/notifications.css";
import ClipLoader from "react-spinners/ClipLoader";
import Error from './Error' ;
import useRequest from "../../hooks/request/useRequest";
import useQueryString from "../../hooks/queryString/useQueryString";
import { Status } from "../types";
import { queryApplicants } from "../../hooks/queryString/utils";
import ApplicantRow from "../Applicant/ApplicantRow";

import Header from './Header';
import SearchArea from "./SearchArea";

const Body = styled.div`
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

  if (isError) {
    return (
     <Error />
    );
  }

  return (
    <Fragment>
      <Header />
      <SearchArea value={query} onChange={onSetValue} />
      <Body>
        {isLoading ? (
          <ClipLoader size={50} color={"#36D7B7"} />
        ) : (
          ApplicantsByStatus.map((rowApplicants, index) => {
            return <ApplicantRow key={index} applicants={rowApplicants} />;
          })
        )}
      </Body>
    </Fragment>
  );
};

export default PropertyView;
