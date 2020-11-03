import { useState, useEffect } from "react";
import axios from "axios";
import { TApplicantList } from "../../components/Applicant/types";
import { NotificationManager } from "react-notifications";

const useRequest = (url: string) => {
  const [applicants, setApplicants] = useState<TApplicantList>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      await axios
        .get<TApplicantList>(url)
        .then((response) => {
          console.log(response);
          setApplicants(response.data);
        })
        .catch((error) => {
          setIsError(true);
          NotificationManager.error(
            "There was an error trying to call the API. Please try again!",
            "Notification",
            3500
          );
        });

      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { applicants, setApplicants, isLoading, isError };
};

export default useRequest;
