import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
var api = require('../../utils/api');

class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        var value = event.target.value;
        this.setState({ city: value });
    }
    handleClick() {
        api.setCity(this.state.city);
    }
    render() {
        return (
            <div className={this.props.layout}>
                <Input
                    placeholder='Portland, Oregon'
                    style={{ width: '12em' }}
                    onChange={this.handleChange}
                    value={this.state.city}
                />
                <Link
                    className='getWeatherButton'
                    to={{
                        pathname: '/forecast',
                        search: '?city=' + this.state.city
                    }}
                >
                    <Button
                        color='success'
                        size={this.props.btnSize}
                        disabled={!this.state.city}
                        onClick={this.handleClick}
                    >
                        Get Weather
                        </Button>
                </Link>
            </div>
        );
    }
}

export default CityInput;


/*{
playerOneImage && playerTwoImage &&
    <Link
        className='button'
        to={{
            pathname: match.url + '/results',
            search: `?playerOneName=` + playerOneName +
            '&playerTwoName=' + playerTwoName
        }}>
        Battle
                    </Link>
}*/