import React, { useEffect,useState } from "react";
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
import { Link } from "react-router-dom";
import '../about/about.css';
import './display.css'
function Display(props) {
    useEffect(()=>{
        props.getArticles();
  
     },[]);
    
     const { articles, } = props.data;
     const [tx ,setTx]=useState(articles)
    const [stres,setStress]=useState("activ")
    const [all,setAll]=useState("activ stres")
    const [depression,setDepression]=useState("activ")
    const [trauma,setTrauma]=useState("activ")
    const [anxiety,setAnxiety]=useState("activ")
const [heading,setHeading]=useState("Stories");


 

     function handleStress(){
        const yy =articles.filter(article=>article.category==="mental");
        setTx(yy);
       setStress("activ stres");
       setAll("activ");
       setDepression("activ");
       setTrauma("activ");
       setAnxiety("activ");
setHeading("Stress");

     }
     function handleAnxiety(){
        const yy =articles.filter(article=>article.category==="anxiety");
        setTx(yy);
       setStress("activ");
       setAll("activ");
       setDepression("activ");
       setTrauma("activ");
       setAnxiety("activ stres");
       setHeading("Anxiety");

     }
     function handleDepression(){
        const yy =articles.filter(article=>article.category==="depression");
        setTx(yy);
       setStress("activ");
       setAll("activ");
       setDepression("activ stres");
       setTrauma("activ");
       setAnxiety("activ");
       setHeading("Depression");

     }
     function handleTrauma(){
        const yy =articles.filter(article=>article.category==="trauma");
        setTx(yy);
       setStress("activ");
       setAll("activ");
       setDepression("activ");
       setTrauma("activ stres");
       setAnxiety("activ");
       setHeading("Trauma");

     }
     function handleAll(){
        const yy =articles;
        setTx(yy);
       setStress("activ");
       setAll("activ stres");
       setDepression("activ");
       setTrauma("activ");
       setAnxiety("activ");
       setHeading("Stories");

     }
    //  function handleTrauma(){

    //  }
    //  function handleAnxiety(){

    //  }
    const kj=`article/${articles[0].articleId}`;

    return (
        <div>
             <div className="left">
   <div className="juu">
   <div><b>Dont Miss</b></div>
   <div className={all} onClick={handleAll}>All</div>
   <div className={stres} onClick={handleStress}>Stress</div>
   <div className={anxiety} onClick={handleAnxiety}>Anxiety</div>
   <div className={depression} onClick={handleDepression}>Depression</div>
   <div className={trauma} onClick={handleTrauma}>Trauma</div>
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

<div className="sic" dangerouslySetInnerHTML={{ __html:articles[0].body}}/>
<Link to={kj}>
<div className="conti">Continue reading...</div>
</Link>
   </div>:<p>Waiting</p>
  }
  
   <div className="others">
      <h2 className="oh">{heading}</h2>
      {tx.length<1?<h4>No {heading} stories yet</h4>:<></>}
{articles[0]?tx.slice(0,4).map((article)=>{
const kk=`article/${article.articleId}`;
return (
<div className="ot">

<img src={stress} alt="stress" className="oti"/>
<div className="otis">
    <Link to={kk} className="jh"><h6 className="jh">{article.title}</h6></Link>

<p> <span className="jjh">{article.name} </span>on  <Moment format="D MMM YYYY" withTitle>
                {article.createdAt}
            </Moment> at 9:40 am</p>
</div>
</div>)}):<p>still loading</p>}


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

