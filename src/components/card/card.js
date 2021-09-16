import React from 'react'
import im from '../../images/mental.jpg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function card() {
  return (
    <>
      <div className="card1">
        <img src={im} className="im" alt="blog "/>
        <div className="cont">
          <div className="top">

            <AccountCircleIcon />

            <div className="ttop">
              <p>Admin</p>
              <p>Aug 19  . 1 min</p>
            </div>
          </div>
<h2>I fought Depression.</h2>
<p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
        </div>
      </div>
    </>
  )
}

export default card
