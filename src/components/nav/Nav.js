import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
function Nav() {


  
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{color:"#AA5626"}}>Mental Health</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Anxiety</a></li>
            <li><a className="dropdown-item" href="/">Depression</a></li>
            <li><a className="dropdown-item" href="/">Stress</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Addiction</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Podcast</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  );
};

export default Nav;
