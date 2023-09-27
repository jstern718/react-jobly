import React, { useState, useEffect } from "react";

// import JobList from "./JobList";
import JobCard from "./JobCard";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";

/**
 * Component for Jobs
 *
 * State:
 * - jobs : array of job objects
 *
 * RoutesList -> JobsPage -> JobsList
 */
function JobsPage() {
  const [pageState, setPageState] = useState({ isLoading: true, jobs: [] });

  /** Gets and loads all jobs on mount */
  useEffect(function () {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();
      setPageState({ isLoading: false, jobs });
    }
    getJobs();
  }, []);

  /**
   * Function to pass down to form
   * Filters job search by titleLike
   * Sets array of jobs to GET request results
   * @param {Object} formData
   */
  async function titleLikeSearch(formData) {
    const jobs = await JoblyApi.getJobs(formData);
    setPageState(oldData => ({ ...oldData, jobs }));
  }
  //TODO: try catch errors

  if (pageState.isLoading) return <h1>Loading...</h1>;

//   <JobList jobs={pageState.jobs}/>}
    console.log("pageState.jobs", pageState.jobs);

  return (
    <div>
      <SearchForm searchFunction={titleLikeSearch} term="titleLike" />
      {pageState.jobs.length === 0 ?
       <h2>No Jobs Found</h2> :
       pageState.jobs.map(job => <JobCard job={job} key={job.id} />)}
    </div>
  );
}
export default JobsPage;