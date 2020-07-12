import React from 'react';

import NavigationMenu from './navigation/NavigationMenu';

import './Header.css';

const Header = props => {
    return (
        <div className='header'>
            <section className='logo'>
                <h1>HubData</h1>
            </section>
            <NavigationMenu className='nav' />
        </div>
    );
};

export default Header;