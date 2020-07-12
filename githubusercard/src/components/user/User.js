import React, {Component} from 'react';

class User extends Component{
    constructor(props){
        super();
        this.state = {
            userdata: props.user
        };
    }

    componentDidMount(){
        this.setState({
            ...this.state.userdata,
            userdata: this.props.user
        });

        console.log('from user: ', this.state);
    }

    render(){
        return (
            <h1>{this.state.userdata}</h1>
        );
    }
}

export default User;