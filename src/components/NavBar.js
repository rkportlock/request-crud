import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">
              Home
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Homes For Sale
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Homes for Rent
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}