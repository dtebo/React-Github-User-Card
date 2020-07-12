import React from 'react';

import NavigationMenu from './navigation/NavigationMenu';

import Search from '../search/Search';

import './Header.css';

const Header = props => {
    return (
        <div className='header'>
            <section className='logo'>
                <h1>HubData</h1>
            </section>
            <Search />
            <NavigationMenu className='nav' />
        </div>
    );
};

export default Header;