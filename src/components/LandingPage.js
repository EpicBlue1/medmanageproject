import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Dash = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={{span:7, offset: 1}} className="Welcome_Section"><h1>Welcome</h1><h2>Jhon</h2><p>lorem ipsum dolor sit amet, consectetur adip</p></Col>
            </Row>
        </Container>
    );
};

export default Dash;