import { conditerAPI } from "../API/api";

const SET_ASSORTIMENT = "SET_ASSORTIMENT";
const CHANGING_ISFETCHING = "CHANGING_ISFETCHING";

let initialState = {
    assortBlock: [],
    isFetching: true
};
 const assortBlockReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_ASSORTIMENT: 
            if(state.assortBlock.length===0 || state.assortBlock.toString() !== action.assortBlock.toString())
            {
                return{
                    ...state,
                    assortBlock: [...state.assortBlock, ...action.assortBlock]
                };
            }
            else return{...state};            
        case CHANGING_ISFETCHING:             
            return{ 
                ...state, 
                 isFetching: action.isFetching }; 
        default:
            return state;    
    }
}
export const setAssortiment=(assortBlock)=> ({type: SET_ASSORTIMENT, assortBlock});
export const changingIsFetching=(isFetching)=> ({type: CHANGING_ISFETCHING, isFetching});

export const getAssortiment = () => {   // Thunk
    return (dispatch) => {
    conditerAPI.GetAssortiment().then(response => {
        dispatch (setAssortiment(response.assortBlock))
      });
    };
};
export default assortBlockReducer;