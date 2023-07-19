import Grad from "./Grad";
import { connect } from "react-redux";
import { savePhoto } from "../../Redux/grad-reducer";

let mapStateToProps = (state) => {
  return {
    //dialogPage: state.dialogPage
  };
};

const GradContainer = connect(mapStateToProps,{savePhoto})(Grad);

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
