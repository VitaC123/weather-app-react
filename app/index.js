import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

import Nav from './components/stateless/Nav';
import Home from './components/container/Home';
import Results from './components/container/Results';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/results' component={Results} />
                        <Route render={function () {
                            return <p>Not found </p>
                        }} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);