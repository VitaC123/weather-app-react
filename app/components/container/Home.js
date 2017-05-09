import React from 'react';
import Search from './Search';

class Home extends React.Component {
    render() {
        return (
            <div>
                And I am the Search Component.
                <Search location='header' />
            </div>
        );
    }
}

export default Home;