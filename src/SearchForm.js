import React, { useState } from 'react';
let filterDiv = document.getElementsByClassName("filterDiv");

/**
 * Component for search form on jobs and companies page
 *
 * Props:
 * - handleSubmit : function
 *
 * State:
 * - formData : object
 *
 * {CompaniesPage, JobsPage} -> SearchForm
 */
function SearchForm({ searchFunction, term }) {
  const [formData, setFormData] = useState({});
  const [areFiltersActive, setAreFiltersActive] = React.useState(false);

  console.log("term", term);

  const addFilters = () => {
     setAreFiltersActive(true);
  };

//   const removeFilters = () => {
//      console.log("formData1", formData);
//      let input = document.getElementsByClassName("text-input")
//      if (term === "nameLike"){
//         setFormData({"nameLike": input.innertext, "minEmloyees": "1", "maxEmployees": "Infinity"});
//      }
//      else{
//         setFormData({"titleLike": input.innertext, "minSalary": "1", "hasEquity": "false"});
//      };
//      setAreFiltersActive(false);
//      console.log("formData2", formData);
//   };

const removeFilters = (e) => {
    e.preventDefault();
    e.target.reset();
}

let minEmployeesValue = 1;
let maxEmployeesValue = undefined;
let nameLikeValue = undefined;
let minSalaryValue = undefined;
let hasEquityValue = undefined;
let titleLikeValue = undefined;


  /**
   * Function to save formData whenever input is updated
   * formData like: { search : value }
   */
  function handleChange(evt) {
    // console.log("evt.target.maxEmployees", evt.target.maxEmployees);
    // console.log("minEmployees", minEmployees);
    // console.log("maxEmployees", maxEmployees);
    let newValue
    const { name, value } = evt.target;
    if (areFiltersActive){
        if (term === "nameLike"){
            if (name === "nameLike"){
                newValue = value;
                nameLikeValue = value;
            }
            if (name === "minEmployees"){
                console.log("evt", evt);
                console.log("evt.target", evt.target);
                console.log("evt.target.value", evt.target.value);

                if (value < 1){
                    newValue = 1;
                    console.log("minEmployees must be 1 or greater");
                }
                else if (maxEmployeesValue && value > maxEmployeesValue){
                    newValue = 1;
                    console.log("minEmployees must be less than maxEmployees");
                }
                else{
                    newValue = value;
                }
                minEmployeesValue = newValue;
            }
            if (name === "maxEmployees"){
                console.log("evt", evt);
                console.log("evt.target", evt.target);
                console.log("evt.target.value", evt.target.value);

                if (minEmployeesValue && value < minEmployeesValue){
                    newValue = undefined;
                    console.log("maxEmployees must be greater than minEmployees");
                }
                else{
                    newValue = value;
                }
                maxEmployeesValue = newValue;
            }
        }
        else{
            if (name === "titleLike"){
                newValue = value;
                titleLikeValue = value;
            }
            if (name === "minSalary"){
                console.log("evt", evt);
                console.log("evt.target", evt.target);
                console.log("evt.target.value", evt.target.value);

                if (value < 1){
                    newValue = 1;
                    console.log("minSalary must be 1 or greater");
                }
                else{
                    newValue = value;
                }
                minSalaryValue = newValue;
            }
            if (name === "hasEquity"){
                console.log("evt", evt);
                console.log("evt.target", evt.target);
                console.log("evt.target.value", evt.target.value);
                if (value === "choose"){
                    newValue = false;
                }
                else{
                    newValue = value;
                }
                hasEquityValue = newValue;
            }
        }
        setFormData({ ...formData, [name]: newValue });
    }
    else{
        setFormData({ ...formData, [name]: value });
    }
  }

  /** Submits form information and calls handleFunction from parent component */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("filtersActive", areFiltersActive);
    console.log("min", minEmployeesValue,"max", maxEmployeesValue, "nameLike", nameLikeValue);
    console.log("formData", formData)
    if (formData.minEmployees && !formData.maxEmployees){
        setFormData({ ...formData, ["maxEmployees"]: undefined });
    }

    searchFunction(formData);
  }

//   function handleFilter(evt) {
//     evt.preventDefault();
//     filterDiv.classList.remove("d-none");

//   }

//   let inputGroup1Value;
//   function handleRange(evt){
//     const { name, value } = evt.target;
//     setFormData({ inputGroup1Label: value });
//     inputGroup1Value = value;
//     console.log("value", value);
//     console.log("inputGroup1Value", inputGroup1Value);
//   }
//   range.addEventListener("input", () => {
//     bubble.innerHTML = rangel.value;
//   });

{/* <label className="input-group-text bg-secondary p-2 col-3" htmlFor="inputGroup1">Min Employees</label>
                <input type="range" className="form-range form-control p-2 col-9" min="0" max="500000" step = "500"
                    name="inputGroup1"
                    placeholder="Enter number of employees.."
                    onChange={handleRange}
                />
                 <input type="text" name="inputGroup1Label" className="form-control col-1">{formData.value}</input>
                <span className="input-group-text bg-primary p-2 col-1">{formData.value}</span> */}


  return (
    <form className="input-group" onSubmit={handleSubmit}>
        <div className="input-group m-1 mt-0 flex-nowrap">
            <button className="btn bg-secondary btn-outline-success dropdown-toggle p-2 col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-1 text-start" onClick={addFilters}><span className="mx-2">Filter Search</span></button>
            <input className="form-control col-7 col-sm-8 col-md-10 col-lg-10 col-xl-8 col-xxl-10"
            name={term}
            placeholder="🔍 Enter search term.."
            onChange={handleChange}
        />
            <button className="btn bg-secondary btn-outline-success p-2">Submit</button>
        </div>


        {areFiltersActive
        ? <div className="filterDiv input-group novalidate">
            {term === "nameLike"
            ? <div className="companyFilters input-group">
            <div className="input-group row container-fluid m-1 p-0 flex-nowrap">
                <label className="input-group-text bg-secondary p-2 col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2" htmlFor="inputGroup1">Min Employees</label>
                <input className="form-control col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10"
                    name="minEmployees"
                    placeholder="Enter number of employees.."
                    type="number"
                    min="1"
                    max="maxEmployeesValue"
                    onChange={handleChange}
                />
              </div>
              <div className="input-group row container-fluid m-1 p-0 flex-nowrap">
                <label className="input-group-text bg-secondary p-2 col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2" htmlFor="inputGroup2">Max Employees</label>
                <input className="form-control col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10"
                    name="maxEmployees"
                    placeholder="Enter number of employees.."
                    type="number"
                    min="minEmployeesValue"
                    onChange={handleChange}
                />
              </div>
            </div>
            : <div className="jobFilter input-group">
                <div className="input-group row container-fluid m-1 p-0  flex-nowrap">
                    <label className="input-group-text bg-secondary p-2 col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2" htmlFor="inputGroup3">Minimum Salary</label>
                    <input className="form-control col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10"
                        name="minSalary"
                        placeholder="Enter salary number.."
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group row container-fluid m-1 p-0  flex-nowrap">
                    <label className="input-group-text bg-secondary p-2 col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2" htmlFor="inputGroup4" defaultValue="Choose..">Offers Equity</label>
                    <select className="form-select col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10"
                        name="hasEquity"
                        onChange={handleChange}>
                        <option>Choose..</option>
                        <option value={false}>Equity Not Required</option>
                        <option value={true}>Must Offer Equity</option>
                    </select>
                </div>
                {/* <div className="input-group row container-fluid m-1 p-0 flex-nowrap justify-content-center">
                    <button className="btn bg-secondary btn-outline-success p-2 w-50">Implement Filter(s)</button>
                </div> */}
            </div>}


        </div>
        :<div className="d-none"></div>}
    </form>
  );
}

export default SearchForm;
