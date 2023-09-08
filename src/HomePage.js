import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import userContext from "./userContext";
import './HomePage.css';
import Alert from './Alert';


/**
 * Component for HomePage
 *
 * RoutesList -> HomePage
 */
function HomePage() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  /**Navigates to location on user click */
  function navigateTo(location) {
    return navigate(`/${location}`)
  }

  if (user) {
    return (
      <div >
        <h1 className="text-center m-2">Hi, {user.firstName} {user.lastName}!</h1>
        <h1 className="text-center">Welcome to ... <span className='logoText'>Job.ly</span></h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center title">Welcome to ... <span className='logoText'>Job.ly</span></h1>
      <h4 className="text-center subhead">All the Jobs ... One Convenient Place.</h4>
      <div className="form-group m-4 d-flex justify-content-center">
        <button onClick={()=>navigateTo("login")} className="btn btn-secondary m-2">Login</button>
        <button onClick={()=>navigateTo("signup")} className="btn btn-secondary m-2">Sign Up</button>
      </div>
    </div>
  );
}

export default HomePage;

