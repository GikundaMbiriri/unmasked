import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticles } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import Moment from 'react-moment';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import about from '../../images/about.jpg'
import anxiety from '../../images/anxiety.jpg'
import stress from '../../images/stress.jpg'
import '../about/about.css';

function Display(props) {
    useEffect(()=>{
        props.getArticles();
  
     },[]);
     const { articles, loading } = props.data;
     const  tx=articles.filter(article=>article.category==="mental");

    //  function handleAll(){

    //  }
    //  function handleStress(){
    //  }
    //  function handleTrauma(){

    //  }
    //  function handleAnxiety(){

    //  }
    return (
        <div>
             <div className="left">
   <div className="juu">
   <div><b>Dont Miss</b></div>
   <div className="activ">All</div>
   <div className="activ">Stress</div>
   <div className="activ">Anxiety</div>
   <div className="activ">Dediression</div>
   <div className="activ">Trauma</div>
   </div>
   <div className="beba">

 {articles[0]?  <div className="current">
<img src={anxiety} alt="anxiety" className="anxiety"/>
<h2>{articles[0].title}</h2>
<div className="chini">
<div className="det">
<AiOutlineCalendar className="d" />
<div className="de"> {<Moment format="D MMM YYYY" withTitle>
                {articles[0].createdAt}
            </Moment>}</div>
</div>
<div className="det">
<FaUserAlt className="d" />
<div className="de"> {articles[0].name}</div>
</div>
<div className="det">
<FaComments className="d" />
<div className="de"> Leave a comment</div>
</div>
</div>
<div className="sic">{articles[0].body}</div>
<div className="conti">Continue reading...</div>
   </div>:<p>Waiting</p>
  }
  
   <div className="others">
      <h2 className="oh">STRESS</h2>
{articles[0]?tx.slice(0,4).map((article)=><div className="ot">

<img src={stress} alt="stress" className="oti"/>
<div className="otis">
<h6>{article.title}</h6>
<p> {article.name} on  <Moment format="D MMM YYYY" withTitle>
                {article.createdAt}
            </Moment> at 9:40 am</p>
</div>
</div>):<p>still loading</p>}


   </div>
   
   </div>
   
   </div>
   
    
        </div>
    )
}
Display.propTypes = {
    getArticles:PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
 }
 const mapStateToProps = (state) => ({
    data: state.data,
  });
 export default connect(mapStateToProps, { getArticles })(Display);

