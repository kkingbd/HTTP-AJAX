import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';
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
      
      render(){
        return(
          <div className= 'App'>
              {this.state.friends.map(friend=> 
                <Friends friends = {friend} />
              )}
          </div>
        );
      }
} 

export default App;
