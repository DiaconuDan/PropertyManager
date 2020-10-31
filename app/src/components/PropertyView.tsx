import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { TApplicantList } from "./types";

const PropertyView = () => {
  const [applicants, setApplicants] = useState<TApplicantList>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    await axios
      .get<TApplicantList>(
        "https://5f9d70d76dc8300016d57b8a.mockapi.io/applicantszz"
      )
      .then((response) => {
        setApplicants(response.data);
      })
      .catch((error) => setIsError(true));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? <div>Loading ...</div> : <div> Merge frr</div>}
    </Fragment>
  );
};

export default PropertyView;
