import React from 'react';

import NavigationMenu from './navigation/NavigationMenu';

import Search from '../search/Search';

import './Header.css';

const Header = props => {

    const getSearch = (s) => {
        //Pass the search value up to App
        props.getSearch(s);
    }

    return (
        <div className='header'>
            <section className='logo'>
                <h1>HubData</h1>
            </section>
            <Search getSearch={getSearch} />
            <NavigationMenu className='nav' />
        </div>
    );
};

export default Header;