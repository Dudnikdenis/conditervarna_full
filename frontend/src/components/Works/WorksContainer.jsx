import { connect } from "react-redux";
import WorkC from './WorkC'
import {changingisDidMount, changingIsFetching, getImg } from "../../Redux/workImg-reducer";

let mapStateToProps = (state) => {
  return {
    workImg: state.workImg,
    isFetching: state.workImg.isFetching,
    isDidMount: state.workImg.isDidMount
  };
};


const WorksContainer = connect(mapStateToProps, {changingisDidMount,changingIsFetching, getImg})(WorkC);

export default WorksContainer;


