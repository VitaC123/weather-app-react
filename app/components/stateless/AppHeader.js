import React from 'react';
import CityInput from '../stateless/CityInput';
import { Link } from 'react-router-dom';

function AppHeader(props) {
    return (
        <div className='appHeader'>
            <Link
                to='/'
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}
            >
                <h1>Weather</h1>
            </Link>
            <CityInput
                layout='headerSearch'
                btnSize='sm'
            />
        </div >
    );
}

export default AppHeader;