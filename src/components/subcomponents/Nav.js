import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavImg from '../../img/NavImg.png';
import DocIcon from '../../img/doctors.svg';
import HomeIcon from '../../img/Home.svg';
import MedBookIcon from '../../img/medicalBook.svg';
import {Link} from 'react-router-dom';

const navBar = () => {

    

    return (
        <div className="NavigationBar">
            <div style={{ backgroundImage: 'url(' + NavImg + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="NavImg"></div>

            <div className="SubNavigation">
            <Link to="/"><div style={{ backgroundImage: 'url(' + HomeIcon + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="NavIc"></div></Link>
            <Link to="/PatientPage"><div style={{ backgroundImage: 'url(' + DocIcon + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="NavIc"></div></Link>
            <Link to="/DoctorsPage"><div style={{ backgroundImage: 'url(' + MedBookIcon + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="NavIc"></div></Link>
            </div>
        </div>
    );
};

export default navBar;