import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoundedShape from '../img/roundeddashshape.png';
import Navbar from './subcomponents/Nav.js';
import SearchBar from './subcomponents/searchBar';
import Timeslots from './subcomponents/timeSlot';
import AppToday from './subcomponents/AppToday';
import AppWeek from './subcomponents/AppWeek';
import PlusIcon from '../img/plusButton.svg';
import {AnimatePresence, motion} from 'framer-motion';
import Modal from './subcomponents/modal';
import {useState} from 'react';


const Dash = () => {

    const [modalOpen, setmodalOpen] = useState(false);
    const close = () => setmodalOpen(false);
    const open = () => setmodalOpen(true); 

    return (
        <>
            <Col md={1}>
                <Navbar/>
            </Col>
            <Row>
                <Col className="TodaySearch" md={{span:4, offset: 1}}>
                <br></br>
                    <h3>Search</h3>
                    <SearchBar/>
                </Col>
                <Col className="TodaySearch" md={7}>
                <br></br>
                    <h3>Timeslots open today</h3>
                    <Timeslots/><Timeslots/><Timeslots/><Timeslots/><Timeslots/><Timeslots/><Timeslots/><Timeslots/>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={7} className="Welcome_Section">
                    <div className="Welcome_subSection">
                        <h1>Welcome Dave</h1><p>lorem ipsum dolor sit amet, consectetur adip</p>
                    </div>
                    
                    <div className="createApp borderRad">
                        <h3>Create Appointment</h3>
                        <div class="Container">
                            <motion.button className="plusIcon" onClick={() => (modalOpen ? close() : open())} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                            </motion.button>
                    
                            <AnimatePresence initial={false} exitBeforeClose={true}>
                                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
                            </AnimatePresence>
                        </div>

                    {/* <motion.button 
                        onClick={() => (modalOpen ? close() : open())} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                        style={{ backgroundImage: 'url(' + PlusIcon + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                        className="plusIcon">
                    </motion.button> */}
                    </div>
                </Col>
                <Col md={4} className="WeekApp_Section">
                    <div className="WeekApp borderRad">
                        <h2>This Weeks Appointments</h2>
                        <hr></hr>

                        {/* Holds all the appointments from this week */}
                        <div className="AppsWeek">
                            <div className="overflow">
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                                <AppWeek/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={{span:11, offset: 1}} className="TodayApp_Section">
                    <h2>Todays Appointments</h2>
                    <hr></hr>
                <div className="AppTodayH">
                    <div className="AppointmentH">
                        <ul>
                            <li>Name</li>
                            <li>Doctor</li>
                            <li>Time</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>

                <div className="overflow">
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                    <AppToday/>
                </div>
                </Col>
            <AnimatePresence initial={false} exitBeforeClose={true}>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
            </Row>
        </>
    );
};

export default Dash;