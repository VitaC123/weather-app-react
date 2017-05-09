import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function GetWeather(props) {
    return (
        <div>
            <Button
                color='success'
                size='sm'
            >
                Get Weather
            </Button>
        </div>
    );
}

export default GetWeather;