import React from 'react';
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**
 * Component for rendering Company Card
 * contains name, description, logo
 *
 * Props:
 * - company : object
 *
 * CompanyDetailsPage -> CompanyCard
 */

function CompanyCard({ company }) {

  return (
    <div className="CompanyCard text-start m-4 pr-1 pl-1">
        <Link to={`/companies/${company.handle}`} className="text-dark text-start text-decoration-none">
        <div className = "comp-div m-0 p-1">
            {company.logoUrl ?
                (<div className="row container m-1 p-0">
                    <div className="col-xs-5 col-sm-6 col-md-5 col-lg-3 col-xl-2 p-0">
                        <img className="logo rounded card-img-top p-0 col-xs-12 col-sm-10 " src={company.logoUrl}/>
                    </div>
                    <div className="comp-text col mr-n5 align-end">
                        <h3 className="col-12">{company.name}</h3>
                        <p className="col-12">{company.description}</p>
                    </div>
                </div>)
                :
                (<div className="row m-2">
                    <div className="comp-text col-11 ml-3">
                        <h3 className="ml-3">{company.name}</h3>
                        <p className="ml-3">{company.description}</p>
                    </div>
                </div>)
            }


        </div>

      </Link>
    </div>

  );
}

export default CompanyCard;