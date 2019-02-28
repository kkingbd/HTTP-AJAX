import React, { Component } from 'react';

class FriendsForm extends Component {
    render() {
        return (
            <div>
                <form >
                    <input
                        type = 'text'
                        name ='name'
                        placeholder = 'name'
                        onChange ={this.handleChange}
                        value = {this.props.newFriend.name}

                    />
                    <input
                        type = 'number'
                        name ='age'
                        placeholder = 'age'
                        onChange ={this.handleChange}
                        value = {this.props.newFriend.age}

                    />
                    <input
                        type = 'text'
                        name ='email'
                        placeholder = 'email'
                        onChange ={this.handleChange}
                        value = {this.props.newFriend.email}

                    />
                    <button type="submit" onClick={this.props.addNewFriend}>
                        Add New Friend
                    </button>
                </form>  
            </div>
        );
    }
}

export default FriendsForm;