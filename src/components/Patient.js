import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './subcomponents/searchBar';
import PatCard from './subcomponents/patientCard';
import PlusIcon from '../img/plusButton.svg';

const PatientP = () => {
    return (
        <>
            <Row>
                <Col md={1}>
                </Col>
            </Row>
            <Row className='height'>

            </Row>
            <Row>
                <Col className="TodaySearch" md={{span:4, offset: 1}}>
                    <h3>Search</h3>
                    <SearchBar/>
                </Col>
                <Col className="TodaySearch" md={3}>
                    <div className="PatData Inline">Registered Patients: </div>
                    <div className="PatData Inline">DataOne: </div>
                </Col>
                <Col className="TodaySearch" md={4}>
                    <div className="addDoc borderRad">
                        <h3>Add Patient</h3>
                        <button style={{ backgroundImage: 'url(' + PlusIcon + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="plusIconD"></button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{span:11, offset: 1}} className="TodayApp_Section">
                    <h2>Patients</h2>

                        <hr></hr>
                    <select className="SelectStyle Inline borderRad">
                        <option>Sort By</option>
                        <option></option>
                        <option></option>
                    </select>
                    <select className="SelectStyle Inline borderRad">
                        <option>Filter By</option>
                        <option></option>
                        <option></option>
                    </select>
                        <hr></hr>

                    <div className="overflow">
                        <PatCard/>
                        <PatCard/>
                        <PatCard/>
                        <PatCard/>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default PatientP;