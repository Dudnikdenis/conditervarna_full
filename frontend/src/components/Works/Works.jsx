import React from "react";
import cs from "./Works.module.css"

function Works(props) { 
  let worksElement = props.workImg.workImg.map(w => <img src={w.url} alt="" />)
  return (
    <section className={cs.section}>
      
      <div className={cs.wraper_fuul}>
        <h1 className={cs.works_h1}>Посмотрите примеры наших работ</h1>
      </div>
      <div className={cs.works}>
        {worksElement};
      </div>      
    </section>
    
  )
  
};

export default Works;
