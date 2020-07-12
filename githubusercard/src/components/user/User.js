import React from 'react';

import * as MUI from '../../materialui/index';

import Followers from '../followers/Followers';

const User = (props) => {
    const classes = MUI.useStyles();

    return (
        <MUI.Card>
            <MUI.CardHeader 
                avatar={
                    <MUI.Avatar aria-label='user avatar'
                        alt='user avatar'
                        src={props.user.avatar_url}
                    />
                }
                title={
                    <section className='title'>
                        <MUI.Typography variant='h3'
                            component='h3'
                        >
                            {props.user.login}
                        </MUI.Typography>
                        <MUI.Typography className={classes.bio}>
                            {props.user.bio}
                        </MUI.Typography>
                    </section>
                }
            >
            </MUI.CardHeader>
            <MUI.CardContent>
                <MUI.Typography variant='h4'
                    component='h4'
                >
                    Followers
                </MUI.Typography>
                {props.user && <Followers username={props.user.login} />}
            </MUI.CardContent>
        </MUI.Card>
    );
}

export default User;