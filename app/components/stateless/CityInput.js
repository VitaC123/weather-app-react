import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

function CityInput(props) {
    return (
        <div>
            <Input
                placeholder='Portland, Oregon'
                style={{width: '12em'}}
            />
        </div>
    );
}

export default CityInput;


