import React, {useEffect} from "react";
import Works from "./Works";
import loader from '../../img/Funnel.gif';
import cs from "./Works.module.css"

const WorkC = (props) => {
  useEffect( () => {
    if(props.workImg.workImg.length===0){ 
      props.getImg();
    }
  },[]);

  return (
    <section className={cs.section}>
      
      <div className={cs.wraper_fuul}>
        <h1 className={cs.works_h1}>Посмотрите примеры наших работ</h1>
      </div>
      <div>{props.workImg.workImg.length=== 0? <img src = {loader}/> : <Works workImg = {props.workImg}/>}
        
      </div>
    </section>
  )
}

export default WorkC;