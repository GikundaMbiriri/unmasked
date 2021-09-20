import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import './home.css'

import Banner from '../../components/banner/Banner'
import About from '../../components/about/About'
import Topics from '../../components/topics/Topics'
export default function Home(){
   return (
    <>
    <Banner/>

    <div className="hh">
    <div className="banner">
    <div className="bb">
    <h1>MY BRAINS NOT BROKEN</h1>
    <h6>REDUCING THE STIGMA ON MENTAL ILLNESS AND PROMOTING MENTAL WELLNESS</h6>
    </div>
    </div>
<About/>
<Topics/>
</div>
    </> 
  );
}
