import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'reactstrap';

function NoMatch(props) {
    return (
        <div className='noMatch'>
            <h1><Badge>404</Badge> Page not found</h1>
            <Link to='/'>Return home</Link>
        </div>
    );
}

export default NoMatch;