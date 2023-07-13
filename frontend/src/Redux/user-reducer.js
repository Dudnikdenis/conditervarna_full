
const PLEASED = "PLEASED";
const UNPLEASED = "UNPLEASED";
const SET_USERS = "SET_USERS";
const CHANGING_ISFETCHING = "CHANGING_ISFETCHING";

let initialSatate = {
    users: [],
    isFetching: true
};

 const userReducer = (state = initialSatate, action) => {

    switch (action.type){
        case PLEASED:  
               
            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}   
                    }
                    return u;
                } ) 
        };
        case UNPLEASED:            
            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}   
                    }
                    return u;
                } ) 
        };
        case SET_USERS:            
            return{
                ...state,
                users:[...state.users, ...action.user]
                }; 
        case CHANGING_ISFETCHING: 
                      
            return{ 
                ...state, 
                 isFetching: action.isFetching };  
        default:
            return state;  
    };  
}

export const userPleased=(userId)=> ({type: PLEASED, userId});
export const userUnpleased = (userId)=>({type: UNPLEASED, userId});
export const setUsers = (user)=>({type: SET_USERS, user});
export const changingIsFetching = (isFetching)=>({type: CHANGING_ISFETCHING, isFetching});

export default userReducer;