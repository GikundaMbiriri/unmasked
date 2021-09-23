import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import './home.css'

import Banner from '../../components/banner/Banner'
import About from '../../components/about/About'
import Topics from '../../components/topics/Topics'
import Advice  from "../../components/advice/Advice";
import Footer from "../../components/footer/Footer";
import Subscribe from "../../components/subscribe/Subscribe";
import Nav from '../../components/nav/Nav'
import { connect } from "react-redux";
import { getArticles } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function Home(props){
  useEffect(()=>{
    props.getArticles();

 },[]);
 const {articles}=props.data;
 const loaded=articles[0]?<> <Nav/>
 <Banner/>

 <div className="hh">
 <div className="banner">
 <div className="bb">
 <h1>MY BRAINS NOT BROKEN</h1>
 <h6>REDUCING THE STIGMA ON MENTAL ILLNESS AND PROMOTING MENTAL WELLNESS</h6>
 </div>
 </div>
<About/>
<Subscribe/>
<Advice/>

<Footer/>
</div></>: <div className="cheki">
<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        className="onai"
      />
</div> 
   return (
    <>
  {loaded}
    </> 
  );
}
Home.propTypes = {
  getArticles:PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps, { getArticles })(Home);