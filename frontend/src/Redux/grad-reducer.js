import { assortimentAPI, gradAPI } from "../API/api";




const SAVE = "SAVE_PHOTO";

let initialSatate = {

};
 const gradReducer = (state = initialSatate, action) => {

    switch (action.type){
        case SAVE: 
            return{
                
            };
        default:
            return state;    
    }
}
export const savePhoto=(photo)=> (dispatch)=>{
    return gradAPI.PutPhoto(photo);
    
};


// export const getAssortiment = () => async (dispatch) => {
//     dispatch (changingIsFetching(true));
//       let response = await assortimentAPI.GetAssortiment();
//       dispatch (changingIsFetching(false));
//       dispatch (setAssortiment(response.assortBlock));
      
//     };

export default gradReducer;