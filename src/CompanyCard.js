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
    <div className="CompanyCard text-start ms-3">
        <Link to={`/companies/${company.handle}`} className="text-dark text-start text-decoration-none">
        <div className = "row">
            {company.logoUrl ?
            <div className="col-3 logo">
                <img className="logo rounded img-fluid" src={company.logoUrl}/>
            </div>:
            <div className="col-1"></div>
            }
            <div className="col-8">
                <h3>{company.name}</h3>
                <p>{company.description}</p>
            </div>

        </div>

      </Link>
    </div>

  );
}

export default CompanyCard;