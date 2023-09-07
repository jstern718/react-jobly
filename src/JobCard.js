import React from "react";
import "./JobCard.css"
import { Link } from "react-router-dom";

/**
 * Component for rendering JobCard
 *
 * Props:
 * - job : object containing {id, title, companyHandle, salary, equity}
 *
 * JobList -> JobCard
 * JobDetailsPage -> JobCard
 */

//for adding company logo
{/* <div className="col-3">
    <img className="rounded img-fluid" src={company.logoUrl}/>
</div> */}

function JobCard({ job }){
  return(
    <div className="JobCard text-start m-4 pl-1 pr-3">
        <Link to={`/jobs/${job.id}`} className="text-dark text-start text-decoration-none">
        <div className = "row">

            <div className="col-11">
                <h4 className="ms-3 mt-3 mb-3">{job.title}</h4>
                <h6 className="ms-3 mb-2">Company: {job.companyHandle}</h6>
                <p className="ms-3 mb-2">Salary: {job.salary}</p>
                <p className="ms-3 mb-2">Equity: {job.equity}</p>
            </div>
        </div>
      </Link>

    </div>
  )
}

export default JobCard;