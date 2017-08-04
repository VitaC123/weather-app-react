import React from 'react';
import CityInput from '../stateless/CityInput';
import CenterMessage from '../stateless/CenterMessage';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <h1>Enter a City and State</h1>
                <CityInput
                    layout='centerSearch'
                    btnSize='md'
                />
            </div>
        );
    }
}

export default Home;