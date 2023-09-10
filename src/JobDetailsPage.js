import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api";
import JobCard from './JobCard'
// import JobList from "./JobList";

/**
 * Component for Job Details Page
 *
 * State:
 * - job : object {}
 *
 * RoutesList -> JobDetailsPage -> JobCard
 */
function JobDetailsPage() {
  const [job, setJob] = useState({});
  const { id } = useParams();

//   console.log("companyHandle", job.companyHandle, "company_handle", job.company_handle);

  /** Gets and loads job data on mount */
  useEffect(function () {
    async function getJob() {
      const job = await JoblyApi.getJob(id);
      setJob(job);
    }
    getJob();
  }, []);

  if (!job) return <h1>Loading...</h1>;

  return(
    <div className="text-start">
      <JobCard key={job.id} job={job} />
    </div>
  )
}

export default JobDetailsPage;