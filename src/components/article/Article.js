import React, { useEffect,useState } from "react";
import { getArticle,Comment } from "../../redux/actions/dataAction";
import { connect } from "react-redux";

import './article.css';
import apeter from '../../images/apeter.jpg';
function Article(props) {
    useEffect( () =>  {
        props.getArticle(props.id);
     
     
       }, []);
       const aa=props.article.title?<>
       <div className="atop">
<img className="apic" src={apeter} alt="apic"/>
<div className="coco"/>
<div className="ha">
<h2 > {props.article.title}</h2>
<h6 >{props.article.category}</h6>
</div>
       </div>
       <div className="mwili">
<h2>{props.article.title}</h2>
<div>{props.article.body}</div>
       </div>
      
       </>:<>Loading</>
    return (
        <div>
          {aa}
        </div>
    )
}

const mapStateToProps = (state) => ({
    article: state.data.article,
    data:state.data
  });
export default connect(mapStateToProps, { getArticle,Comment })(Article);
