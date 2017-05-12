import React from 'react';
var api = require('../../utils/api');

class Forecast extends React.Component {
    render() {
        return (
            <div className='forecast'>
                <p>{api.city ? api.city : "Go back and enter a city"}</p>
            </div>
        );
    }
}

export default Forecast;