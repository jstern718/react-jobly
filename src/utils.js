import React, { useState } from 'react';

/**
   * Function to save formData whenever input is updated
   * formData like: { search : value }
   */

function handleChangeHelper(evt, filterValues, areFiltersActive, term, formData, setFormData) {


    let {minEmployeesValue,
            maxEmployeesValue,
            nameLikeValue,
            minSalaryValue,
            hasEquityValue,
            titleLikeValue
        } = filterValues;

    let newValue

    const { name, value } = evt.target;
    if (areFiltersActive){
        if (term === "nameLike"){
            if (name === "nameLike"){
                newValue = value;
                nameLikeValue = value;
            }
            if (name === "minEmployees"){

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



export {handleChangeHelper};