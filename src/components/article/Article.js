import React, { useEffect,useState } from "react";
import { getArticle,Comment } from "../../redux/actions/dataAction";
import { connect } from "react-redux";
import Moment from 'react-moment';
import './article.css';
import apeter from '../../images/apeter.jpg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Comments from '../comments/Comments'
function Article(props) {
    useEffect( () =>  {
        props.getArticle(props.id);
     
     
       }, []);
       const aa=props.article.title?<>
       <div className="atop">
<img className="apic" src={apeter} alt="apic"/>
<div className="coco"/>
<div className="ha">
<h2 > {props.article.title}</h2> <span className="ssss"> by </span>
<h6 >{props.article.name}</h6>
</div>
       </div>
       <div className="mwili">
<h2>{props.article.title}</h2> 
<p className="pdate"> created on {<Moment format="D MMM YYYY" withTitle>
                {props.article.createdAt}
            </Moment>}</p>
            <div className="abody" dangerouslySetInnerHTML={{ __html: props.article.body }} />

       </div>
      <Comments id={props.article.articleId}/>
       </>: <div className="cheki">
<Loader
        type="Circles"
        color="#f58032;"
        height={100}
        width={100}
        className="onai"
      />
</div> 
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
