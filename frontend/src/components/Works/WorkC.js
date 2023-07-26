import React, {useState, useEffect} from "react";
import Works from "./Works";
import loader from '../../img/Funnel.gif';
import cs from "./Works.module.css"

const WorkC = (props) => {

  useEffect( () => {
    if(!props.isDidMount){ 
      props.getImg();
    }
    props.changingisDidMount(true);
  },[]);

  return (
    <section className={cs.section}>
      
      <div className={cs.wraper_fuul}>
        <h1 className={cs.works_h1}>Посмотрите примеры наших работ</h1>
      </div>
      <div>{!props.isDidMount? <img src = {loader}/> : <Works workImg = {props.workImg}/>}
        
      </div>
    </section>
  )
}

export default WorkC;