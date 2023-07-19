import React from "react";

import cs from "./Assortiment.module.css";
import Assortiment_bloc from "./Assortiment_bloc/Assortiment_bloc";
import loader from '../../img/Funnel.gif';



class Assortiment extends React.Component {

  componentDidMount(){

    if(this.props.assortBlock.assortBlock.length===0){
      this.props.getAssortiment();
    }

  }

  render () {
    
    return(
    <section className={cs.assortiment}>
            <div className={cs.wraper_fuul}>
              <div className={cs.assortiment_caption}>
                <h2 className={cs.assortiment_title}>
                  Ассортимент
                </h2>
              </div>{this.props.isFetching ? <img src = {loader}/> : null}
                <Assortiment_bloc assortiment = {this.props.assortBlock.assortBlock}/>
            </div> 
          </section>
  )}
}

export default Assortiment;