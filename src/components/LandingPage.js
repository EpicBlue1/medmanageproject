import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoundedShape from '../img/roundeddashshape.svg';
import Temp from '../img/TempCal.png';
import Navbar from './subcomponents/Nav.js';

const Dash = () => {
    return (
        <>
            <Row>
                <Col md={1}>
                    <Navbar/>
                </Col>
                <Col md={8} style={{ backgroundImage: 'url(' + RoundedShape + ')', backgroundSize: 'contain', backgroundPosition: '-45px 40%', backgroundRepeat: 'no-repeat'}} className="Welcome_Section">
                    <h1>Welcome Dave</h1><p>lorem ipsum dolor sit amet, consectetur adip</p>
                </Col>
                <Col md={3} className="Calendar_Section">
                    <h1>Calendar</h1>
                    <div style={{ backgroundImage: 'url(' + Temp + ')', backgroundSize: 'contain', backgroundPosition: '-45px 40%', backgroundRepeat: 'no-repeat'}} className="Calendar"></div>
                </Col>
            </Row>
            <Row>
                <Col md={{span:8, offset: 1}} className="TodayApp_Section"><h2>Todays Appointments</h2></Col>
            </Row>
        </>
    );
};

export default Dash;