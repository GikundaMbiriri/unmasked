import React from 'react'
import apeter from '../../images/apeter.jpg';
import { BiComment,BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import './anxiety.css'
function Anxiety() {
    return (
        <div className="anxiet">
            <h2>Latest Articles About Anxiety </h2>
            <div className="ts">
            <div className="righ">
                <div className="acard">
                   <img src={apeter} alt="apeter" className="apeter" /> 
                   <div className="ap">
                       <div className="peter">
                           <div>Anxiety</div>
                           <div>- 1 week ago</div>
                       </div>
                       <h2>My Battle with High-Functioning Anxiety</h2>
<div className="ai">
    <div>
<BiComment/>  
190
    </div>
    <div>
<AiOutlineHeart/> 
200
    </div>
</div>
<p>
In looking at what I wrote last year during Suicide Prevention Awareness Month, I found a lot of useful information in my posts. But as it often happens, I’ve learned a few things in the past year that have helped form new opinions and improve the way I view different aspects of mental health and wellness. And while it’s always useful to share resources and information (such as this post of mine from last year which does just that), I thought I’d share another insight into suicide prevention that isn’t discussed as often....
</p>
<p>Continue Reading</p>
<div className="ashare">
<BiShareAlt /> 50 Shares
</div>
                   </div>
                </div>  
            </div>
           
           
            <div className="lef">

            </div>
   
            </div>
        </div>
    )
}

export default Anxiety
