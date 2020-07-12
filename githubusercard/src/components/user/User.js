import React, {Component} from 'react';

class User extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('from user: ', this.props.user);
    }

    render(){
        return (
            <h1>{this.props.user.login}</h1>
        );
    }
}

export default User;