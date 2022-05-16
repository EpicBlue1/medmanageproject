import React from 'react';
import TempImg from '../../img/PatientImageF.jpg'

const patCard = () => {

    

    return (
        <div className="patientCard Inline borderRad">
            <img src={TempImg} style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="patImg Inline"/>
            <h3 className="patName Inline">Robert White</h3>
            <p className="tel Inline">Tel: 0605038776</p>
            <button className="EditButton borderRad Inline">Edit Patient</button>
        </div>
    );
};

export default patCard;