import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';
import FriendsForm from './components/FriendsForm';
class App extends Component {
    constructor(){
      super();
      this.state = {
        friends: []
      }
    }
    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({friends: response.data});
            })
            .catch(err => {
                console.log('Server Error', err)
            })
      }
      formTo = friend => {
        axios
        .post('http://localhost:5000/friends', friend)
        .then(response =>{
          this.setState({friends:response.data})
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })
      }

      addFriend = (friend) =>{
        axios
          .post('http://localhost:5000/friends', friend)
          .then(res => (
            this.setState(
              {
                  friends : res.data,
              }) 
            ))
            .catch(err => console.log(err))
      }
      deleteFriend =(friend)=>{
        axios
         .delete(`http://localhost:5000/friends/${id}`)
         .then(res=>{
           this.setState({
             friends: res.data,
           })
         })
      }
      
      render(){
        return(
          <div className= 'App'>
                <Friends friends = {this.state.friends} />
                <FriendsForm formTo = {this.formTo} />
              )}
          </div>
        );
      }
} 

export default App;
