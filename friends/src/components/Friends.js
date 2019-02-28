import React from 'react';

const Friends = props => {
    return(  
        <div>
        {props.friends.map(friends=>    
            <div>   
                <p> Name: {friends.name }</p> 
                <p> Age:  {friends.age  }</p>
                <p> Email:{friends.email}</p>
            </div>
        )}
        </div> 
    );
}

export default Friends;