import React from 'react'
import im from '../../images/banner.jpg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import stress from '../../images/stress.jpg'
import './banner.css';

function Banner() {
  return (
    <>
            <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false} 
    >
           <div className="carrier">

        <img src={stress} alt="kdjdj dj" className="im"  />
      
         <div className="tt"><h1>Anxiety Warriors</h1>
      <h5>Yes! I spoke about it.</h5>
         </div>
         
       </div>
       <div className="carrier">

        <img src={stress} alt="kdjdj dj" className="im"  />
       
         <div className="tt"> <h1>Anxiety Warriors</h1>
         <h5>Yes! I spoke about it.</h5></div>
       </div>
       <div className="carrier">

        <img src={stress} alt="kdjdj dj" className="im"  />
       
        <div className="tt"> <h1>Anxiety Warriors</h1>
         <h5>Yes! I spoke about it.</h5></div>
       </div>
          <div className="carrier">

        <img src={stress} alt="kdjdj dj" className="im"  />
       
        <div className="tt"> <h1>Anxiety Warriors</h1>
         <h5>Yes! I spoke about it.</h5></div>
       </div>
 </Carousel>
      
    </>
    
  )
}

export default Banner
