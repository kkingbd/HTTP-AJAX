import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const FrBar = styled.div`   
     display: flex;
     flex-wrap: wrap;
     margin: 50px;

    .box{
        display: flex;
        flex-wrap: wrap;
        border: 1px solid black;
        background: #fffded;
        margin: 5px;
        width: 300px;
        padding: 20px;
        taxt-align: center;
        .disBox{
            width: 280px;
        }
        a{
            color: black;
            text-decoration: none;
        }
        .Xbar{
            margin-top: 5px;
            margin-right: 5px;
            cursor: pointer;
            color: black;
        }
    }
`;

export default class FriendList extends React.Component {
    render(){
        return(  
            <FrBar>
                {this.props.friends.map(friend=>  (  
                    <div key ={friend.id}>   
                        
                        <div className = 'box'>
                            <Link className = 'disBox' to ={`/friends/${friend.id}`}>
                                <h1>{friend.name}</h1>
                                <div>{`Age: ${friend.age}`}</div>
                                <div>{`Email: ${friend.email}`}</div>
                            </Link>
                            <div className = ' Xbar' onClick={() => this.props.deleteFriend(friend)}> X </div>
                        </div>
                    </div>
                ))}
            </FrBar> 
        );
    }
}
