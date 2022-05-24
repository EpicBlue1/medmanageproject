import React from 'react';
import TempImg from '../../img/DocImage.jpg';
import { Col, Row } from 'react-bootstrap';
import editBut from '../../img/editBut.svg';

const patCard = () => {

    return (
        <Col sm={4} md={2} className="d-hidden patientCard">
            <Row className="patientCardi">
                <Col xs={3} md={7} className="TopStyle"><img src={TempImg} style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="TopStyleImg"/></Col>
                <Col xs={9} md={5} className="TopStyle"><img src={editBut} style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="editBut"/></Col>
                <Col xs={6} md={12} className="BotStyle"><b>Ben Robert</b><h4>065598</h4></Col>
                <Col xs={6} md={12} className="BotStyle"><h4>Telephone</h4><p>0605038776</p></Col>
                <Col xs={6} md={12} className="BotStyle"><h4>Email</h4><p>reinardt.de.beer@gmail.com</p></Col>
                <Col xs={6} md={12} className="BotStyle"><h4>Age</h4><p>21 Years Old</p></Col>
            </Row>
        </Col>
    );
};

export default patCard;