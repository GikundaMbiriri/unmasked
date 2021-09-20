
import React,{useState,useEffect} from 'react'
import './nav.css'
import { Link } from "react-router-dom";
export default function Nav(){
  const s=1;
  const st=1;
  const stt=1;
  const sttt=1;
	 const [burger,setBurger]=useState("burger");
   const [nav,setNav]=useState("nav-links");
   const [st1,setSt1]=useState({})
   const [st2,setSt2]=useState({})
  const [st3,setSt3]=useState({})
    const [st4,setSt4]=useState({})
    const handleClick=()=>{

      if (nav=="nav-links") {
        setNav("nav-links nav-active");

      }
      else{
        setNav("nav-links")
      }
      if (st1.animation==`navLinkFade 0.5s ease forwards ${s / 7 + 0.5}s`) {
        setSt1({});
      }
      else{
        setSt1({animation:`navLinkFade 0.5s ease forwards ${s / 7 + 0.5}s`})

      }
  if (st2.animation==`navLinkFade 0.5s ease forwards ${st / 7 + 0.5}s`) {
        setSt2({});
      }
      else{
        setSt2({animation:`navLinkFade 0.5s ease forwards ${st / 7 + 0.5}s`})
      }
        if (st3.animation==`navLinkFade 0.5s ease forwards ${stt / 7 + 0.5}s`) {
        setSt3({});
      }
      else{
        setSt3({animation:`navLinkFade 0.5s ease forwards ${stt / 7 + 0.5}s`})
      }
        if (st4.animation==`navLinkFade 0.5s ease forwards ${sttt / 7 + 0.5}s`) {
        setSt4({});
      }
      else{
        setSt4({animation:`navLinkFade 0.5s ease forwards ${sttt / 7 + 0.5}s`})
      }
      if (burger=="burger") {
        setBurger("burger toggle");
      }
      else{
        setBurger("burger")
      }
       console.log(st1)
    }
	return (
		<>
		 <nav>
  <div className="logo">
    <h4>Unmasked</h4>
  </div>
  <ul className={nav}>
    <li style={{st1}}><a href="#">Home</a></li>
    <li style={{st2}}><a href="#">About</a></li>
    <li style={{st3}}><a href="#">Blogs</a></li>
    <li style={{st4}}><a href="#">Podcast</a></li>
  </ul>
  <div onClick={handleClick} className={burger}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
  </div>
</nav>

		</>)
}