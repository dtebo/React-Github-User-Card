import React, {Component} from 'react';
import axios from 'axios';

import * as MUI from '../../materialui/index';

import './Followers.css';

class Followers extends Component{
    constructor(props){
        super(props);
        this.state = {
            followers: null
        };
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/dtebo/followers`)
            .then((resp) => {
                console.log(resp);
                this.setState({
                    ...this.state.followers,
                    followers: resp.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render(){
        return (
            <div className='follower-container'>
                {this.state.followers && this.state.followers.map((follower) => {
                   return <MUI.Avatar src={follower.avatar_url}
                            key={follower.id}
                         />
                })}
            </div>
        );
    }
}

export default Followers;