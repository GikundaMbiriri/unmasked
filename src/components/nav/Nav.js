
import React,{useState,useEffect} from 'react'
import './nav.css'
import { Link } from "react-router-dom";
export default function Nav(){
	 
	return (
		<>
		  <div className="navbar">

    <label htmlFor="togglericon" className="toggler" checked></label>
    <input type="checkbox" id="togglericon" className="toggler" />

    <div className="brand">
      <span className="brand-icon">⚛</span>
      <span className="brand-name">UNMASKED</span>
    </div>

    <div className="nav">


      <Link to="#top">Home</Link>
      <Link to="#about">About</Link>

      <div className="dropdown">
        <label htmlFor="toggle-1">Categories</label>
        <input type="checkbox" id="toggle-1" />
        <ul>
          <li><Link to="#">Depression</Link></li>
          <li><Link to="#">Anxiety</Link></li>
          <li><Link to="#">Stress</Link></li>
         
        </ul>
      </div>

      <div className="dropdown">
        <label htmlFor="toggle-2">Social</label>
        <input type="checkbox" id="toggle-2" />
        <ul>
          <li><Link to="#">Facebook</Link></li>
          <li><Link to="#">Twitter</Link></li>
          <li><Link to="#">Tiktok</Link></li>
          <li><Link to="#">Medium</Link></li>
        </ul>
      </div>
      <Link to="#">Contact</Link>
      <form>
        <input type="text" placeholder="search" name="search" />
        <button>🔎</button>
      </form>
    </div>
  </div>
	
		</>)
}