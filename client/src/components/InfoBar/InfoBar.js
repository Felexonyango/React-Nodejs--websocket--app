import React from 'react';
import './infobar.css'

const InfoBar =({room})=>(
 
    <div className="Infobar">
<div className="leftInnerContainer">
    <img className="onlineIcon" src={"./onlineIcons.jpeg"} alt="online"/>
          <h3>{room}</h3>
    </div>
    </div>
    
    



)
export default InfoBar;