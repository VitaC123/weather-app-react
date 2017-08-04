import React from 'react';
var api = require('../../utils/api');
import { Container, Row, Col, Jumbotron } from 'reactstrap';

class Forecast extends React.Component {
    componentDidMount() {
        var bg = document.getElementById('appContainer');
        bg.classList.remove('defaultBackground');
        bg.classList.add('forecastBG');
    }
    componentWillUnmount() {
        var bg = document.getElementById('appContainer');
        bg.classList.remove('forecastBG');
        bg.classList.add('defaultBackground');
    }
    render() {
        return (
            <div className='forecast'>
                <Container>
                    <Row>
                        <Col>
                            <Jumbotron fluid>
                                <h1 className='display-3'>
                                    {api.city}
                                </h1>
                                <p className='lead'>The weather, at your fingertips.</p>
                            </Jumbotron>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="4">
                            I am col 4 (1)
                        </Col>
                        <Col sm="4">
                            I am col 4 (2)
                        </Col>
                        <Col sm="4">
                            I am col 4 (3)
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            I'm number 4.
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            And I'm number 5.
                        </Col>
                    </Row>


                </Container>
            </div>
        );
    }
}

export default Forecast;