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
      userdata: ''
    }
  }

  componentDidMount(){
    // request user data
    axios.get(`${baseUrl}dtebo`)
      .then(resp => {
        console.log('axios success: ', resp);

        // add the user data to state
        this.setState({
          ...this.state.userdata,
          userdata: resp.data
        });

        console.log('state: ', this.state);
      })
      .catch(err => {
        console.log('axios error: ', err);
      });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <User user={this.state.userdata} />
      </div>
    );
  }
}

export default App;
