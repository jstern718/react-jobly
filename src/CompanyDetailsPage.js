import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
import JobList from "./JobList";

/**
 * Component for Company Details Page
 *
 * State:
 * - company : object {}
 *
 * RoutesList -> CompanyDetailsPage -> CompanyCard
 *                                  -> JobsList
 */
function CompanyDetailsPage() {
  const [company, setCompany] = useState({});
  const { handle } = useParams();

  console.log("company", company);

  /** Gets and loads company data on mount */
  useEffect(function () {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompany();
  }, []);

  if (!company) return <h1>Loading...</h1>;

  //saved
//   <div className="text-start">
//       <h2 className = "ms-5 mt-3">{company.name}</h2>
//       <h4  className ="ms-5">{company.description}</h4>
//       <JobList jobs={company.jobs} />
//     </div>

{/* <h2>Jobs at this Company:</h2> */}

  console.log("company.jobs", company.jobs);


return(
    <div>
        <CompanyCard company={company} key={company.handle} />
        {!company.jobs ?
        <h2>No Jobs Found</h2> :
        <div>
            <JobList jobs={company.jobs} />
        </div>}
    </div>
)

}

export default CompanyDetailsPage;