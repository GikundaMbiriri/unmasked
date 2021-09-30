import React, { useEffect } from "react";
import about from '../../images/about.jpg'
import anxiety from '../../images/anxiety.jpg'
import stress from '../../images/stress.jpg'
import './about.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { connect } from "react-redux";
import { getArticles } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import Moment from 'react-moment';
import Display from '../display/Display'
function About(props){
 
   

   const ab=   <div className="about">
 <Display/>
   <div className="right">
<div className="abo">
   <h2>About Unmasked</h2>
   <p>
   The mango is perfect in that it is always yellow and if it’s not, I don’t want to hear about it. The mango’s only flaw, and it’s a minor one, is the effort it sometimes takes to undress the mango, carve it up in a way that makes sense, and find its way to the mouth.
   </p>

</div>
<div className="mission">
   <h2>Our Mission</h2>
   <p>The mango is perfect in that it is always yellow and if it’s not, I don’t want to hear about it. The mango’s only flaw, and it’s a minor one, is the effort it sometimes takes to undress the mango, carve it up in a way that makes sense, and find its way to the mouth.</p>

</div>
<div className="mission">
   <h2>Core Values</h2>
   <p>The mango is perfect in that it is always yellow and if it’s not, I don’t want to hear about it. The mango’s only flaw, and it’s a minor one, is the effort it sometimes takes to undress the mango, carve it up in a way that makes sense, and find its way to the mouth.</p>

</div>

   </div>
   </div>

   
   
   return (
    <>
{ab}
    </> 
  );
}


export default About;
