import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/header/Header';

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
      </div>
    );
  }
}

export default App;
