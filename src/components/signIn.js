import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap';
import NavImg from '../img/NavImg.png';
import OpenEye from '../img/icons8-eye-96.png';
import ClosedEye from '../img/icons8-closed-eye-96.png';
import {Link} from 'react-router-dom';

const SignIn = () => {

    const [showHide, setshowHide] = useState("password");
    const [Icon, setIcon] = useState(ClosedEye);

    const ShowHides = () => {
        if(showHide === "password") {
            setshowHide("text");
            setIcon(OpenEye);
        } else {
            setshowHide("password");
            setIcon(ClosedEye);
        }
    }
        
    return(
    <div className="background">
        <form className="SignIn borderRad">
            <div style={{ backgroundImage: 'url(' + NavImg + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="FormImg"></div>
            <h2>Sign In</h2>
            <input className="SignInputsE" type="text" placeholder="example@gmail.com" name="email"/>
            <input className="SignInputs" type={showHide} placeholder="password" name="password"/><div onClick={ShowHides} style={{ backgroundImage: 'url(' + Icon + ')', backgroundSize: '15px 15px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="icon"></div>
            <Link to="/"><button className="SignButton">Sign In</button></Link>
        </form>
    </div>

    )
}

export default SignIn;

