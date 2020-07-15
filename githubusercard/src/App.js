import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/header/Header';
import User from './components/user/User';

let baseUrl = 'https://api.github.com/users/';

class App extends Component {
  constructor(){
    super();

    this.state = {
      mounted: false,
      userdata: ''
    }
  }

  getSearch = (s) => {
    if(this.state.mounted){
      this.getUserData(s);
    }
  }

  getUserData = (username) => {
    axios.get(`${baseUrl}${username}`)
      .then(resp => {
        console.log('axios success: ', resp);

        // add the user data to state
        this.setState({
          userdata: resp.data
        });
      })
      .catch(err => {
        console.log('axios error: ', err);
      });
  }

  componentDidMount(){
    this.setState({
      mounted: true
    });

    // request user data
    this.getUserData('dtebo');
  }

  render(){
    return (
      <div className="App">
        {this.state && <Header getSearch={this.getSearch} />}
        <User user={this.state.userdata} />
      </div>
    );
  }
}

export default App;
