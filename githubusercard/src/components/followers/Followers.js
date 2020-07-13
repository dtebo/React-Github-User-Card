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

    getFollowers(user){
        axios.get(`https://api.github.com/users/${user}/followers`)
            .then((resp) => {
                console.log(resp);
                this.setState({
                    followers: resp.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount(){
        this.getFollowers(this.props.username);
    }

    componentDidUpdate(prevProps){
        if(this.props.username !== prevProps.username){
            this.getFollowers(this.props.username);
        }
    }

    render(){
        return (
            <div className='follower-container'>
                {this.state.followers && this.state.followers.map((follower) => {
                   return (
                       <section key={follower.id} className='follower-info'>
                           <MUI.Avatar src={follower.avatar_url}
                                alt={follower.login}
                                title={follower.login}
                            />
                            <MUI.Typography>
                                {follower.login}
                            </MUI.Typography>
                       </section>
                    );
                })}
            </div>
        );
    }
}

export default Followers;