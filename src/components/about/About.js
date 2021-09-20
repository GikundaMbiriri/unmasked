import React, { useEffect } from "react";
import about from '../../images/about.jpg'
import anxiety from '../../images/anxiety.jpg'
import stress from '../../images/stress.jpg'
import './about.css';
import { AiOutlineCalendar } from 'react-icons/ai';

export default function About(){
   return (
    <>
   <div className="about">
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
   <div className="current">
<img src={anxiety} alt="anxiety" className="anxiety"/>
<h2>How I overcame Social Anxiety</h2>
<div className="chini">
<div className="det">
<AiOutlineCalendar/>
<div className="de">16 September 2021</div>
</div>
<div className="det">
<AiOutlineCalendar className="d" />
<div className="de">16 September 2021</div>
</div>
<div className="det">
<AiOutlineCalendar/>
<div className="de">16 September 2021</div>
</div>
</div>
<p>Over the years, I’ve learned a number of methods and techniques to manage my depression and anxiety. Some of those have worked very well (meditation and talk therapy), while others haven’t been as effective (I’m hoping to come back to journaling one day, but it’s not soon). Either way, I’ve learned a lot about what’s helpful for me on my mental health journey, and used those lessons to continue building</p>
<div className="conti">Continue reading...</div>
   </div>
   <div className="others">
      <h2 className="oh">STRESS</h2>
<div className="ot">
<img src={stress} alt="stress" className="oti"/>
<div className="otis">
<h6>We fought social Anxiety</h6>
<p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
</div>
</div>
<div className="ot">
<img src={stress} alt="stress" className="oti"/>
<div className="otis">
<h6>We fought social Anxiety</h6>
<p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
</div>
</div>
<div className="ot">
<img src={stress} alt="stress" className="oti"/>
<div className="otis">
<h6>We fought social Anxiety</h6>
<p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
</div>
</div>
<div className="ot">
<img src={stress} alt="stress" className="oti"/>
<div className="otis">
<h6>We fought social Anxiety</h6>
<p>Katy Liu on Sep 29, 2017 at 9:48 am</p>
</div>
</div>
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

    </> 
  );
}
