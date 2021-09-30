import React,{useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
function Nav() {
const [top,setTop]=useState("topnav");

function handleClick(){
if (top==="topnav") {
 setTop("topnav responsive");
  
}
else{
setTop("topnav");
}
}
  
  return (
    <>
    <div class={top} id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  <a href="#about">About</a>
  <a  style={{fontSize:"15px"}} class="icon" onClick={handleClick}>&#9776;</a>
</div>
    </>
  );
};

export default Nav;
