import React,{useState} from "react";


import './nav.css'
const Nav = () => {


  
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-dark teal mb-4">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown 
                                </a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>
    </>
  );
};

export default Nav;
