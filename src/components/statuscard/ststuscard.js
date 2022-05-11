import React from "react";
// import { Bug, BuildingArch } from 'tabler-icons-react';

import './statuscard.css'

const Statuscard=(props)=>{
return(
    <div className="statuscard">
        <div className="statusicon"><props.icon size={60}
    strokeWidth={2}
    color={'white'}></props.icon></div>
    
    <div className="statuscardinfo">
        <div  className="statustitle">{props.title}</div>
        <div style={{color: props.colour}} className="statuscount">{props.count}</div>
        {/* <span>{}</span> */}

    </div>
    </div>
)
}

export default Statuscard;
