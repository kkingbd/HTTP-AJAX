import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
////////////////////////////////////////////////////////////////////////
import FriendList from './components/FriendList';
import FriendsForm from './components/FriendsForm';
import Friends from './components/Friends';
////////////////////////////////////////////////////////////////////////
class App extends Component {
    constructor(){
      super();
      this.state = {
        friends: [],
        newFriend: {
          name: '',
          age: null,
          email: '',
        },
      }
    }
////////////////////////////////////////////////////////////////////////
    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(({data})=> {
                this.setState({
                  friends : data});
            })
            .catch(err => {
                console.log('Server Error', err)
            })
      }
////////////////////////////////////////////////////////////////////////
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ newFriend: { ...this.state.newFriend, [name]: value, } });
      }
////////////////////////////////////////////////////////////////////////
      addFriend = (friend) =>{
        axios
          .post('http://localhost:5000/friends', friend)
          .then(res=> { this.setState({friends: res.data}) ;
         this.props.history.push("/friends" );})
      };
////////////////////////////////////////////////////////////////////////
      deleteFriend =(friend)=>{
        axios
         .delete(`http://localhost:5000/friends/${friend.id}`)
         .then(res=> { this.setState({friends: res.data}) ;
         this.props.history.push("/friends" );})
         .catch(console.log);
      };
////////////////////////////////////////////////////////////////////////
      updateFriend = (friend, id) =>{
        console.log(friend);
        axios
          .put(`http://localhost:5000/friends/${friend.id}`, friend)
          .then(res => {
            this.setState({ friends: res.data });
            this.props.history.push("/friends");
          })
          .catch(console.log);
      };
////////////////////////////////////////////////////////////////////////  
      render(){ 
        return(
          <div className= 'App'>
          <Route exact path='/friends' render={props => (
                <FriendsForm
                  {...props}
                  handleChange={this.handleChange}
                  addFriend={this.addFriend}
                  newFriend={this.state.newFriend}
                />
              )}
            /> 
            <Route exact path= '/friends' render = {props=>(
                <FriendList 
                    {...props} 
                    friends = {this.state.friends}
                    deleteFriend= {this.deleteFriend}
                 />
              )}
            />
            <Route exact path="/friends/:id" render={props => (
                <Friends
                  {...props}
                  friend={this.state.friends}
                  updateFriend={this.updateFriend}
                  deleteFriend={this.deleteFriend}
                />
              )}
            /> 
             
          </div>
        );
      }
} 
export default App;
