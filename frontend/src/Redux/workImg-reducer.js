// 
import { conditerAPI } from "../API/api";

const SET_IMG_WORK = "SET_IMG_WORK"
const CHANGING_ISFETCHING = "CHANGING_ISFETCHING";
const CHANGING_ISDIDMOUNT = "CHANGING_ISDIDMOUNT";

let initialSatate = { 
    workImg: [],
    isFetching: true,
    isDidMount: false
};

const workImgReducer = (state = initialSatate, action) => {
    switch (action.type){
        case SET_IMG_WORK: 
        if(state.workImg.length===0 || state.workImg.toString() !== action.imgWork.toString())
        {
            return{
                ...state,
                workImg: [...state.workImg, ...action.imgWork]
            };
        }
        else return{...state};
            
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

export const getImg = () => { // Thunk      
      return (dispatch) => {
            conditerAPI.GetImgWork().then(response => {
                dispatch (setImgWork(response));
            })
        };
    };

export default workImgReducer;