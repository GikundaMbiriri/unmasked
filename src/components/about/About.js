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

function About(props){
   useEffect(()=>{
      props.getArticles();

   },[]);
   const { articles, loading } = props.data;
   console.log(articles[0]);
   const ab=loading?<p>loading</p>:   <div className="about">
   <div className="left">
   <div className="juu">
   <div><b>Dont Miss</b></div>
   <div className="">All</div>
   <div className="active">Stress</div>
   <div>Anxiety</div>
   <div>Dedivression</div>
   <div>Trauma</div>
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
{articles[0]?articles.slice(0,4).map((article)=><div className="ot">

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

About.propTypes = {
   getArticles:PropTypes.func.isRequired,
   data: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
   data: state.data,
 });
export default connect(mapStateToProps, { getArticles })(About);
