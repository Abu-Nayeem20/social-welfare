import React from 'react';
import './Member.css'

const Member = (props) => {
    // console.log(props.member)
    const { name, age, designation, donation, profession, img} = props.member;
    return (
        <div className="member">
            <img className='thumbnail' src={img} alt="" />
            <div className="member-info">
                <h2>{name}</h2>
                <h4>Designation: {designation}</h4>
                <p>Age: {age}</p>
                <p>Profession: {profession}</p>
                <strong>Donation: ${donation}</strong>
            </div>
        </div>
    );
};

export default Member;