import { connect } from "react-redux";
import User from "./User";
import {userPleased, userUnpleased, setUsers,changingIsFetching} from './../../Redux/user-reducer'


let mapStateToProps = (state)=>{
   
    return {
        users: state.users,
        isFetching: state.users.isFetching
    };
}

// функция передаваемая в connect, сейчас сокращенный вариант используется
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onClickPlased: (userId) => {
     
           
//             dispatch(userPleasedActionCrieator(userId))
//         },

//         onClickUnplaesed: (userId) => {
      
            
//             dispatch(userUnpleasedActionCrieator(userId))
//         },

//         setState: (users) => {
            
//             dispatch(setUsersActionCrieator(users))
//         },

//         changingIsFetching: (isFetching) => {
//             dispatch(changingIsFetchingActionCrieator(isFetching))
//         }
//     };
//}

const UserContainer = connect(mapStateToProps, {userPleased, userUnpleased,setUsers,changingIsFetching})(User);

export default UserContainer;