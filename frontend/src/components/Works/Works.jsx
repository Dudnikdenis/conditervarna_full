import React from "react";
import cs from "./Works.module.css"

function Works(props) { 
  return (
    
      <div className={cs.works}>
        {props.workImg.workImg.map(w => <img src={w.url} alt="" />)};
      </div>  
  )
};

export default Works;
