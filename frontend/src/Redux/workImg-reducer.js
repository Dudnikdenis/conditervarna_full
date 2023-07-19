// 
import { imgWorkAPI } from "../API/api";

const SET_IMG_WORK = "SET_IMG_WORK"
const CHANGING_ISFETCHING = "CHANGING_ISFETCHING";
const CHANGING_ISDIDMOUNT = "CHANGING_ISDIDMOUNT";

let initialSatate = { 
    workImg: [],
    isFetching: true,
    isDidMount: true
};

const workImgReducer = (state = initialSatate, action) => {
   debugger;
    
    switch (action.type){
        case SET_IMG_WORK: 
            return{
                ...state,
                workImg: [...state.workImg, ...action.imgWork]
            };
        case CHANGING_ISFETCHING: 
            return{ 
                ...state, 
                 isFetching: action.isFetching }; 
        case CHANGING_ISDIDMOUNT: 
            return{ 
                ...state, 
                isDidMount: action.isDidMount }; 
        default:
    return state; 
    }   
}
export const setImgWork=(imgWork)=> ({type: SET_IMG_WORK, imgWork});
export const changingIsFetching=(isFetching)=> ({type: CHANGING_ISFETCHING, isFetching});
export const changingisDidMount=(isDidMount)=> ({type: CHANGING_ISDIDMOUNT, isDidMount});

export const getImg = () => async (dispatch) => {
    dispatch (changingIsFetching(true)); //loader
      let response = await imgWorkAPI.GetImgWork();
     dispatch (changingIsFetching(false)); //loader
    // debugger;
    // console.log(response);
      dispatch (setImgWork(response.workImg));
    };

export default workImgReducer;