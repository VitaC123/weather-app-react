import React from 'react';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

import AppHeader from '../stateless/AppHeader';
import Home from './Home';
import Forecast from './Forecast';
import NoMatch from '../stateless/NoMatch';



class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <AppHeader />
                    
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/forecast' component={Forecast} />
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}



export default App;