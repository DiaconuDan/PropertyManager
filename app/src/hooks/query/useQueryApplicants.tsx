import { useState } from "react";
import { TApplicantList, Applicant } from "../../components/types";

function useQueryApplicants(applicants:TApplicantList, query:string ) {
  const [queriedApplicants, setQueriedApplicants] = useState<TApplicantList>([]);
 
  setQueriedApplicants(applicants.filter((applicant:Applicant) => {
    return (
      applicant.firstName.toLowerCase().includes(query.toLowerCase()) ||
      applicant.lastName.toLowerCase().includes(query.toLowerCase()) ||
      applicant.email.toLowerCase().includes(query.toLowerCase())
    );
  }));
    
  return { queriedApplicants };

}

export default useQueryApplicants;
