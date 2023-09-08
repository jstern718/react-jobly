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
        <nav className="navbar navbar-dark navbar-expand-sm">
            <div className="container-fluid">
              <div className="logo-box expanded-logo-box d-sm-none">
                <NavLink className="logo-link col-4 nav-link" to="/" end>
                  <p className='navLogoText'>Job.ly</p>
                </NavLink>
              </div>
              <button className="navbar-toggler m-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="navbar-nav me-auto mx-1">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <li className="nav-item d-none d-sm-block">
                    <div className="logo-box collapsed-logo-box">
                      <NavLink className="logo-link col-4 nav-link" to="/" end>
                        <p className='navLogoText'>Job.ly</p>
                      </NavLink>
                    </div>

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
                        Logout:<span className="invisible">_</span>{user.username}
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
    <nav className="navbar navbar-dark navbar-expand-sm">
      <div className="container-fluid">
        <div className="logo-box expanded-logo-box navbar-brand">
          <NavLink className="logo-link col-4 nav-link" to="/" end>
            <p className='navLogoText'>Job.ly</p>
          </NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <NavLink className="col-4 navbar-brand nav-link" to="/" end>
            <i className="bi bi-house"></i>
          </NavLink>
          <ul className="navbar-nav">
            <li>
              <NavLink className="nav-link" to="/login" end>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/signup" end>
                Sign<span className="invisible">:</span>Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
