import React from "react";
import Works from "./Works";
import loader from '../../img/Funnel.gif';



class WorkC extends React.Component {

  
  componentDidMount(){
    debugger;
    if(this.props.workImg.isDidMount){ 
      debugger;
      console.log(this.props.workImg.isDidMount)
      this.props.getImg();
      this.props.changingisDidMount(false);
    }
    console.log(this.props.workImg)
    
  }

  render () {
    
    return(
    <div>{this.props.isFetching ? <img src = {loader}/> : null}
        <Works workImg = {this.props.workImg}/>
    </div>
    
  )}
}

export default WorkC;