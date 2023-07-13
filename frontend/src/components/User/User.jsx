import React from "react";
import axios from "axios";
import UserItem from "./UserItem";
import loader from '../../img/Funnel.gif';


class User extends React.Component {
    
    componentDidMount () { //вызываеся rect-ом когда отрисует компонент
        if(this.props.users.users.length===0){
            this.props.changingIsFetching(true);
            // запрос на сервер
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.changingIsFetching(false);
                this.props.setUsers(response.data.items)
            });
        }
    }
    // {"name": "Adekvatni4",  "id": 29047,  "uniqueUrlName": null,  "photos": { "small": null, "large": null }, "status": null, "followed": true }
    render() {
        
        return (  
            <>{this.props.isFetching ? <img src = {loader}/> : null}
                <UserItem users = {this.props.users} onClickUnplaesed = {this.props.userUnpleased} onClickPlased = {this.props.userPleased}/>
            </>   
             
            );
        }
}

export default User;