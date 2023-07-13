import { connect } from "react-redux";
import Works from './Works'

let mapStateToProps = (state) => {
  return {
    workImg: state.workImg
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
const WorksContainer = connect(mapStateToProps, mapDispatchToProps)(Works);

export default WorksContainer;


// function WorksContainer(props) { 
//   return (
//     <StoreContext.Consumer>
//       {      
//       (store)=>{
       
//         let workImg = store.getState().workImg;
//         return(
//           <Works workImg = {workImg}/>
//         )
//       }
//       }      
//     </StoreContext.Consumer>    
//   )  
// };