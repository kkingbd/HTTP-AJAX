import React, { Component } from 'react';

class FriendsForm extends Component {
    constructor(props){
    super(props)
    this.state = {
        newFriend: {
            id: '',
            name: '',
            age: '',
            email: '',
        }
      }
    }

    handleChange = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]: event.target.value
            }
        })
    }
    onSubmitTo = e=>{
        e.preventdefault();
        this.setState({
            this.props.formTo(this.state.newFriend);
            this.setState({
                newFriend: {
                    id: '',
                    name: '',
                    age: '',
                    email: '',
                }
            })
       })
    }

    render() {
        return (
        <div classname= 'NewForm'>
          <h2> Add new Friend </h2>
            <form onSubmit = {this.onSubmitTo}>
                <input
                    type = 'text'
                    name ='name'
                    placeholder = 'name'
                    onChange ={this.handleChange}
                    value = {this.state.newFriend.name}

                />
                <input
                    type = 'text'
                    name ='age'
                    placeholder = 'age'
                    onChange ={this.handleChange}
                    value = {this.state.newFriend.age}

                />
                <input
                    type = 'text'
                    name ='email'
                    placeholder = 'email'
                    onChange ={this.handleChange}
                    value = {this.state.newFriend.email}

                />
            </form>  
        </div>
        );
    }
} 

export default FriendsForm;