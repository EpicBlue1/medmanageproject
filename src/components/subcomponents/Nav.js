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
            <Link to="/"><p>Home</p></Link>
            <Link to="/PatientPage"><p>Doctors</p></Link>
            <Link to="/DoctorsPage"><p>Patients</p></Link>
            </div>
        </div>
    );
};

export default navBar;