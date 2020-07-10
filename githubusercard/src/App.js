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
    axios.get(`${baseUrl}dtebo`)
      .then(resp => {
        console.log('axios success: ', resp);
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
