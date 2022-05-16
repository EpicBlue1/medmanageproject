import React from 'react';
import TempImg from '../../img/DocImage.jpg'

const patCard = () => {

    

    return (
        <div className="patientCard Inline borderRad">
            <img src={TempImg} style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="patImg Inline"/>
            <h3 className="patName Inline">Susan Whales</h3>
            <p className="tel Inline">Tel: 0605038776</p>
            <p className="tel Inline">Specialization: Neurology</p>
            <p className="tel Inline">Email: 0605038776</p>
            <button className="EditButton borderRad">Edit Doctor</button>
        </div>
    );
};

export default patCard;