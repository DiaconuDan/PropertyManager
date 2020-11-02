import React, { Fragment, FunctionComponent } from "react";
import "react-notifications/lib/notifications.css";
import ClipLoader from "react-spinners/ClipLoader";
import Error from "../../components/Error/Error";
import useRequest from "../../hooks/request/useRequest";
import useQueryString from "../../hooks/query/useQueryString";
import { Status } from "../../components/types";
import { getApplicantsByQuery } from "../../components/Applicant/utils";
import ApplicantRow from "../../components/Applicant/ApplicantRow";
import Header from "../../components/PageHeader/Header";
import SearchArea from "../../components/SearchArea/SearchArea";
import { Body } from "./styles";

const PropertyView: FunctionComponent = () => {
  const { applicants, isLoading, isError } = useRequest(
    "https://5f9d70d76dc8300016d57b8a.mockapi.io/applicants"
  );
  const [query, onSetValue] = useQueryString("search", "");

  const queriedApplicants = getApplicantsByQuery(query, applicants);

  const ApplicantsByStatus = Object.values(Status).map((status) => {
    return queriedApplicants.filter((applicant) => applicant.status === status);
  });

  if (isError) {
    return <Error />;
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
