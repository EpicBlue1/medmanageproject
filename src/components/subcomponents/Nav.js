import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavImg from '../../img/NavImg.png';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";

const NavBar = () => {

    const [PageIn, setPageIn] = useState("1");
    const [NavStyleH, setNavStyleH] = useState({borderLeft: '4px solid #61B0B7'});
    const [NavStyleD, setNavStyleD] = useState({borderLeft: '4px solid white'});
    const [NavStyleP, setNavStyleP] = useState({borderLeft: '4px solid white'});
    
    const Val = useRef();

    const getPage = (e) => {
        let pageNum = e.currentTarget.textContent;
        console.log(pageNum);
        if(Val === "Home") {
            setPageIn(1)
        } else if (pageNum === "Doctors") {
            setPageIn(2)
        } else if (pageNum === "Patients") {
            setPageIn(3)
        }
    }

    // useEffect(() => {
    //     let pageNum = PageIn;

    //     if(pageNum === 1){
    //         setNavStyleH({borderLeft: '4px solid #61B0B7'})
    //         setNavStyleD({borderLeft: '4px solid white'})
    //         setNavStyleP({borderLeft: '4px solid white'})
    //     } else if (pageNum === 2){
    //         setNavStyleH({borderLeft: '4px solid white'})
    //         setNavStyleD({borderLeft: '4px solid #61B0B7'})
    //         setNavStyleP({borderLeft: '4px solid white'})             
    //     } else if (pageNum === 3){
    //         setNavStyleH({borderLeft: '4px solid white'})
    //         setNavStyleD({borderLeft: '4px solid white'})
    //         setNavStyleP({borderLeft: '4px solid #61B0B7'})             
    //     }
    // },[])

const cssStyles = "nav";

// if(sate === first ){
//     sccstyles + "selected"
// }

    return (
        <div className="NavigationBar">
            <div style={{ backgroundImage: 'url(' + NavImg + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="NavImg"></div>
            <h4>MedClinic Inc</h4>

            <hr></hr>
            <div className="SubNavigation">
            <Link to="/"><p onClick={getPage} ref={Val} style={NavStyleH} className="navItem">Home</p></Link>
            <Link to="/DoctorsPage"><p onClick={getPage} ref={Val} style={NavStyleD} className="navItem">Doctors</p></Link>
            <Link to="/PatientPage"><p onClick={getPage} ref={Val} style={NavStyleP} className="navItem">Patients</p></Link>
            </div>
            <button className="logOut">Sign Out</button>
        </div>

    );
};

export default NavBar;