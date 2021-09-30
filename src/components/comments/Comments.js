import React,{useEffect,useState} from 'react'
import './comments.css';
import { getArticle,Comment,getArticles } from '../../redux/actions/dataAction'
import { connect } from "react-redux";

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import article from '../../pages/article/article';

function Comments(props) {
const [cname,setCname]=useState("");
const [cmail,setCmail]=useState("");
const [comment,setComment]=useState("");

    useEffect(()=>{
props.getArticle(props.id);

    },[])
const handleSubmit= ()=>{
const info={
    name:cname,
    email:cmail,
    comment:comment
}
console.log(props.id);

props.Comment(info,props.id);
setComment("");
setCmail("");
setCname("");

}

    return (
        <div>

            <div style={{width:"100vw"}}>
            <h2 className="comh">Leave a comment</h2>
            </div>
<form>
  <div className="form-row tx">
    <div class="form-group col-md-12">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" onChange={(e)=>setCmail(e.target.value)} value={cmail} placeholder="Email"/>
    </div>
    <div className="form-group col-md-12">
      <label for="name20">Name</label>
      <input type="text" class="form-control" id="name20" onChange={(e)=>setCname(e.target.value)}  value={cname} placeholder="First name"/>
    </div>
    <div className="form-group col-md-12">

    <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment" onChange={(e)=>setComment(e.target.value)} value={comment} placeholder="write your comment here"></textarea>
    </div>
    <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
  </div>
  

 
  
  
</form>
           <div className="comho">
             { props.article.comments[0]? props.article.comments.map((comment)=><div className="comment">

<Avatar size={64} icon={<UserOutlined />} className="cleft" />
<div className="cright">
    <div className="ctjuu">
<div className="cname">{comment.name} says</div>
<div className="cdate">2 days ago</div>
</div>
<div className="cbody">
    {comment.body} 
</div>
</div>
</div>) :<></>}
               </div> 
        </div>
    )
}
const mapStateToProps = (state) => ({
    article: state.data.article,
    data:state.data
  });
export default connect(mapStateToProps, { getArticle,Comment,getArticles })(Comments);
