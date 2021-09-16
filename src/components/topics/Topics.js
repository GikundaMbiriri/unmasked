import React, { useEffect } from "react";
import stress from '../../images/stress.jpg'
import anxiety from '../../images/anxiety.jpg'
import depression from '../../images/depression.jpg'
import './topics.css';


export default function Topics(){
   return (
    <>
    <h1 className="main-title">What We Discuss</h1>

<div className="container">
  <h3 className="title">Depression</h3>
  <div className="content">
    <a href="#">
      <div className="content-overlay"></div>
      <img className="content-image" src={depression}/>
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">What is Stress</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>


<div className="container">
  <h3 className="title">Depression</h3>
  <div className="content">
    <a href="#">
      <div className="content-overlay"></div>
      <img className="content-image" src={depression}/>
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">What is Stress</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <h3 className="title">Depression</h3>
  <div className="content">
    <a href="#">
      <div className="content-overlay"></div>
      <img className="content-image" src={anxiety}/>
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">What is Stress</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <h3 className="title">Depression</h3>
  <div className="content">
    <a href="#">
      <div className="content-overlay"></div>
      <img className="content-image" src={stress}/>
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">What is Stress</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>
  

    </> 
  );
}