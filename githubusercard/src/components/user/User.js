import React, {Component} from 'react';

import * as MUI from '../../materialui/index';

class User extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('from user: ', this.props.user);
    }

    render(){
        return (
            <MUI.Card>
                <MUI.CardHeader 
                    avatar={
                        <MUI.Avatar aria-label='user avatar'
                            alt='user avatar'
                            src={this.props.user.avatar_url}
                        />
                    }
                    title={
                        <MUI.Typography variant='h3'
                            component='h3'
                        >
                            {this.props.user.login}
                        </MUI.Typography>
                    }
                >
                </MUI.CardHeader>
            </MUI.Card>
        );
    }
}

export default User;