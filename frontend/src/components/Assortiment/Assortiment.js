import React, {useEffect} from "react";

import cs from "./Assortiment.module.css";
import Assortiment_bloc from "./Assortiment_bloc/Assortiment_bloc";
import loader from '../../img/Funnel.gif';

const Assortiment = (props) => {

  // console.log(props);
  // debugger;
  useEffect( ()=>{
    if(props.assortBlock.assortBlock.length===0){
      props.getAssortiment();
    }
  },[])

  return(
    <section className={cs.assortiment}>
            <div className={cs.wraper_fuul}>
              <div className={cs.assortiment_caption}>
                <h2 className={cs.assortiment_title}>
                  Ассортимент
                </h2>
              </div>
              {props.assortBlock.assortBlock.length===0? <img src = {loader}/> : <Assortiment_bloc assortiment = {props.assortBlock.assortBlock}/>}
                
              {/* {this.props.isFetching ? <img src = {loader}/> : null}
                <Assortiment_bloc assortiment = {this.props.assortBlock.assortBlock}/> */}
            </div> 
          </section>
  );
};

export default Assortiment;