import React from 'react'
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { LinkedIn } from '@material-ui/icons';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
      <>
      <div className="sitefooter">
      <div className="containr">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Our Mission</h6>
            <p className="text-justify">Our mission is to make the world a better place by creating reliable tech solutions to the problems that are in our society.We also aim at raising more tech talent by training passionate learners into tech.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Our solutions</h6>
            <ul className="footerlinks">
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Stress</li>
              <li>Trauma</li>
         
             
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footerlinks">
              <li> <Link to="/"><a>Home</a></Link></li>
             <li> <Link to="/aboutm"><a>About</a></Link></li>
             <li>   <Link to="/servicesm"><a>Podcast</a></Link></li>
           
              <li><Link to="/contact-us"><a>Contact us</a></Link></li>
            
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="containr">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyrighttext">Copyright &copy; 2021 All Rights Reserved by 
         <a href="/"> MGrinders</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="socialicons">
              <li><Link to="https://web.facebook.com/MGrinders-104271638672243"><a className="facebook" href="#"><FacebookIcon/></a></Link></li>
              <li><Link to="https://twitter.com/mbiriri_gikunda"><a className="twitter"  href="/"><TwitterIcon/></a></Link></li>
              <li><a className= "dribbble"  href="/"><InstagramIcon/></a></li>
              <li><a className= "linkedin"  href="/"><LinkedIn/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>
      </>
        
    )
}

export default Footer;
