import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import './anxiety.css'
import anx from '../../images/anx.jpg';

import Footer from "../../components/footer/Footer";
import Nav from '../../components/nav/Nav'
import Anxiety from "../../components/anxiety/Anxiety";
export default function anxiety(){
   return (
    <>
    <Nav/>
   <div className="fir">
       <img src={anx} alt="anxiety" className="anx"/>
       <div className="tt">
           <h2>Anxiety is Curable</h2>
           <h6>Ask me how</h6>
       </div>
   </div>
<Anxiety/>
   
<Footer/>
    </> 
  );
}
