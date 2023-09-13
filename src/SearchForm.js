import React, { useState } from 'react';
let filterDiv = document.getElementsByClassName("filterDiv");
console.log("filters", filterDiv);

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

  const addFilters = () => {
     setAreFiltersActive(true);
  };
  const removeFilters = () => {
     setAreFiltersActive(false);
  };
  /**
   * Function to save formData whenever input is updated
   * formData like: { search : value }
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ [name]: value });
  }

  /** Submits form information and calls handleFunction from parent component */
  function handleSubmit(evt) {
    evt.preventDefault();
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
        <div className="input-group m-1 mt-0">
            <button className="btn bg-secondary btn-outline-success" onClick={addFilters}>Filter</button>
            <input className="form-control"
            name={term}
            placeholder="Enter search term.."
            onChange={handleChange}
        />
            <button className="btn bg-secondary btn-outline-success p-2">Submit</button>

        </div>
        <div className="filterDiv d-none input-group">
            <div className="input-group row container-fluid m-1 p-0 flex-nowrap">
                <label className="input-group-text bg-secondary p-2 col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2" htmlFor="inputGroup1">Min Employees</label>
                <input className="form-control col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10"
                    name="minEmployees"
                    placeholder="Enter number of employees.."
                    onChange={handleChange}
                />
            </div>
            <div className="input-group row container-fluid m-1 p-0 flex-nowrap">
                <label className="input-group-text bg-secondary p-2 col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2" htmlFor="inputGroup2">Max Employees</label>
                <input className="form-control col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10"
                    name="maxEmployees"
                    placeholder="Enter number of employees.."
                    onChange={handleChange}
                />
            </div>
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
            <div className="input-group row container-fluid m-1 p-0 flex-nowrap justify-content-center">
                <button className="btn bg-secondary btn-outline-success p-2 w-50" onClick={removeFilters}>Implement Filter(s)</button>
            </div>

        </div>
    </form>
  );
}

export default SearchForm;
