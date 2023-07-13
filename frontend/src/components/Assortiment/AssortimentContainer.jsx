import { connect } from "react-redux";
import Assortiment from "./Assortiment";
import { setAssortiment, changingIsFetching, getAssortiment } from "../../Redux/assortBlock-reducer"

let mapStateToProps = (state) =>{

  return {
    
    assortBlock: state.assortBlock,
    isFetching: state.assortBlock.isFetching
  };
};

const AssortimentCotainer = connect(mapStateToProps, {setAssortiment,changingIsFetching, getAssortiment})(Assortiment);

export default AssortimentCotainer;