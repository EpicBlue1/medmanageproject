import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavImg from '../../img/NavImg.png'

const navBar = () => {
    return (
        <div className="NavigationBar">
            <div style={{ backgroundImage: 'url(' + NavImg + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="NavImg"></div>
        </div>
    );
};

export default navBar;