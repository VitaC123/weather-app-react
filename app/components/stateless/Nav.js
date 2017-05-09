import React from 'react';
var NavLink = require('react-router-dom').NavLink;

function Nav(props) {
    return (
        <ul className='nav'>
            <li>
                <NavLink activeClassName='active' exact to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/Results'>
                    Results
                </NavLink>
            </li>
        </ul>
    );
}

export default Nav;