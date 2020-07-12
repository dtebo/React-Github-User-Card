import React, {Component} from 'react';
import axios from 'axios';

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
            <>
                <h1>Followers Displayed Here</h1>
            </>
        );
    }
}

export default Followers;