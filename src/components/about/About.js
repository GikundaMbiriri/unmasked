import React, { useEffect } from "react";
import about from '../../images/about.jpg'

import './about.css';


export default function About(){
   return (
    <>
   <div className="about">
   <div className="left">
   <h2>About Us</h2>
   <p>
Learn how to create your own website, exactly the way you've envisioned it with the help of intuitive tutorials, how-tos and step-by-step guides.
Learn how to create your own website, exactly the way you've envisioned it with the help of intuitive tutorials, how-tos and step-by-step guides.
Learn how to create your own website, exactly the way you've envisioned it with the help of intuitive tutorials, how-tos and step-by-step guides.<br/>

   </p>
   </div>
   <div className="right">
<img src={about} alt="pic" className="im"/>
   </div>
   </div>

    </> 
  );
}
