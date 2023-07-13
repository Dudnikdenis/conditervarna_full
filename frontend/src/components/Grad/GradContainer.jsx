import Grad from "./Grad";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    //dialogPage: state.dialogPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

const GradContainer = connect(mapStateToProps,mapDispatchToProps)(Grad);

export default GradContainer;

// function GradContainer() {
// этот контейнер передает в пропсы функцию которая вызывает компонента (чистая)
//     return (
//       <StoreContext.Consumer> 
//         {
//         (store) => {
//           debugger;
//             const DownloadFoto = (text) => { 
//             store.dispatch(TextTestActionCrieator(text));
//             }
//             return(
//             <Grad DownloadFoto = {DownloadFoto} />
//             )
//           }
//         }
//       </StoreContext.Consumer>
//     )
// };
