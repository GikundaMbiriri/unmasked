import React from 'react';
import { Fade } from 'react-slideshow-image';
import anxiety from '../../images/anxiety.jpg';
import depression from '../../images/depression.jpg'
import './banner.css';
import 'react-slideshow-image/dist/styles.css'
const fadeImages = [
 anxiety,depression,anxiety,depression
];

const fadeProperties = {
  duration: 3500,
  transitionDuration: 1000,
  infinite: true,
  arrows:false,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Banner = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties} >
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} style={{width:"100vw",height:"70vh",objectFit:"cover"}} alt="banner" />
            <div className="kemikal"/>
            <div  className="bh">
              <h1>The story of my life</h1>
            <h2>The fear is real but the danger is not.</h2>
            </div>
          </div>
        
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} style={{width:"100vw",height:"70vh",objectFit:"cover"}} alt="banner" />
            <div className="kemikal"/>
            <div  className="bh">
              <h1>The story of my life</h1>
            <h2>You become courageous because you face your fear.</h2>
            </div>
          </div>
         
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} style={{width:"100vw",height:"70vh",objectFit:"cover"}} alt="banner" />
            <div className="kemikal"/>
            <div  className="bh">
              <h1>The story of my life</h1>
            <h2>If you feel like you are sinking,try positive thinking.</h2>
            </div>
            
          </div>
         
        </div>
      </Fade>
    </div>
  )
}
export default Banner;