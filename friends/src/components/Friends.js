import React from 'react';

const Friends = props =>{
    return(
        
        <div>
            <p> Name: {props.friends.name}</p>
            <p> Age: {props.friends.age}</p>
            <p> Email: {props.friends.email}</p>
        </div>
    );
}

export default Friends;