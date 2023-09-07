import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import userContext from "./userContext";

/**
 * Component for NavBar
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  if (user) {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <li className="nav-item d-none d-sm-block">
                    <NavLink className="col-4 nav-link" to="/" end>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0
                        .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0
                        0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0
                        0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5
                        7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                      </svg>
                    </NavLink>
                  </li>
                  <li className="nav-item d-sm-none">
                    <NavLink className="col-4 nav-link" to="/" end>
                        Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile" end>
                        Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/companies" end>
                        Companies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/jobs" end>
                        Jobs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login" onClick={logout} end>
                        Logout {user.username}
                    </NavLink>
                  </li>
                </div>
              </ul>
            </div>
        </nav>
      </div>
    );
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <NavLink className="col-4 navbar-brand nav-link" to="/" end>
            <i className="bi bi-house"></i>
          </NavLink>
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/login" end>
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup" end>
              Sign Up
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
