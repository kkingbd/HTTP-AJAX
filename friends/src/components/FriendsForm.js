import React, { Component } from 'react';
import styled from 'styled-components';
const ListBar = styled.div`   
     margin: auto;
     max-width: 50%;
     .fox{  
         display: flex;    
         flex-wrap: wrap;
         max-width: 80%;
         justify-content: space-around;
         margin: 10px auto;

         .cat{
            display: flex;
             flex-wrap: wrap;
             Height: 40px;
             width: 100%;
             text-align: center;
             margin: auto;
         }
         .hat{
             height: 30px;
             margin: 10px auto;
             color: white;
             background: pink;
             cursor: pointer;
         }
         .hat:hover{
             background: grey;
             
         }
     }
`;
class FriendsForm extends Component {
    render() {
        return (
            <ListBar>
                <div>
                <form className = 'fox'>
                   <>
                    <input
                        className='cat'
                        type = 'text'
                        name ='name'
                        placeholder = 'name'
                        onChange ={this.props.handleChange}
                        value = {this.props.newFriend.name}

                    />
                    <input
                        className='cat'
                        type = 'number'
                        name ='age'
                        placeholder = 'age'
                        onChange ={this.props.handleChange}
                        value = {this.props.newFriend.age}

                    />
                    <input 
                        className='cat'
                        type = 'text'
                        name ='email'
                        placeholder = 'email'
                        onChange ={this.props.handleChange}
                        value = {this.props.newFriend.email}

                    />
                    <button className= 'hat' type="submit" onClick={() => this.props.addFriend(this.props.newFriend)}>
                        Add New Friend
                    </button>
                    </>
                </form>  
                </div>
            </ListBar>
        );
    }
}

export default FriendsForm;