import React from "react";
import "./Rightsidebar.css";
import comment from "../../assets/message-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/sofblack-logo.png";

const Widget = () => {
  return (
    <div className=" widget">
      <h4>The OverFlow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="" width="15px" />
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="" width="15px" />
          <p>Postcast 347: How valuable is your screen name?</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="" width="15px" />
          <p>
            Review queue workflows-final realease...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="" width="15px" />
          <p>Please welcome Valued Associates: #958-V2Blast #959 - SpencerG</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="" width="15px" />
          <p>Outdated Answers:accepted answer is now unprinned on Stack Overflow</p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
        <p>38</p>
          <p>
            Why was this spam flag declined, yet this question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-div-2">
        <p>20</p>
          <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
    
        <div className="right-sidebar-div-2"> 
        <p>15</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
      </div>
  );
};

export default Widget;
