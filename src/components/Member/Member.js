import React from 'react';
import './Member.css'

const Member = (props) => {

    // use destructuring
    const { name, age, designation, donation, profession, img} = props.member;
    
    return (
        <div className="member">
            <img className='thumbnail' src={img} alt="" />
            <div className="member-info">
                <h2>{name}</h2>
                <h4>Designation: {designation}</h4>
                <p>Age: {age}</p>
                <p>Profession: {profession}</p>
                <p><strong>Donation: ${donation}</strong></p>
                <button onClick={ () => props.handleSelectToCart(props.member)}  
                className='select-btn'>
                <i className="far fa-check-circle">
                </i> Select</button>
            </div>
        </div>
    );
};

export default Member;