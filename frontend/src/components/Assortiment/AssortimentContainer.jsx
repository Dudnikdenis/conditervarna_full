import { connect } from "react-redux";
import Assortiment from "./Assortiment";
import {changingIsFetching, getAssortiment } from "../../Redux/assortBlock-reducer"

let mapStateToProps = (state) => {
  // console.log(state);
  // debugger;
  return {

    assortBlock: state.assortBlock,
    isFetching: state.assortBlock.isFetching
  };
};

const AssortimentCotainer = connect(mapStateToProps, {changingIsFetching, getAssortiment })(Assortiment);

export default AssortimentCotainer;