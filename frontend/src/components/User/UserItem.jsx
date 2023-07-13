import React from "react";

function UserItem (props) {

    return (
        <div>                
                {props.users.users.map(w => 
                    <div>
                        <div>{w.name}</div>
                        <div>{w.status}</div>
                        <div>{w.City}</div>
                        {w.followed ? <button onClick={() => {props.onClickUnplaesed(w.id)}}>followed</button>
                         : <button onClick={() => {props.onClickPlased(w.id)}}>unfollowed</button>}                        
                        </div> 
                     )}  
                </div>
    )

}

export default UserItem;