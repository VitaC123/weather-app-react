import React from 'react';
import PropTypes from 'prop-types';
import CityInput from '../stateless/CityInput';
import GetWeather from '../stateless/GetWeather';

class Search extends React.Component {
    render() {
        return (
            <div className={this.props.location + 'Search'}>
               <CityInput />
               <GetWeather />
            </div>
        );
    }
}

export default Search;