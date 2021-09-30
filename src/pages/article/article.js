import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import './article.css'


import Footer from "../../components/footer/Footer";
import Subscribe from "../../components/subscribe/Subscribe";
import Nav from '../../components/nav/Nav'
import { connect } from "react-redux";
import { getArticles } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import Article from '../../components/article/Article';
function article(props){
 
 
  return(<>
  <Nav/>
  <Article id={props.match.params.id}/>
  <Footer/>
  </>);
}


export default article;