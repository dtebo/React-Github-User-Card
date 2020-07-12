import React, {Component} from 'react';

class Followers extends Component{
    constructor(){
        super();
        this.state = {
            followers: null
        };
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