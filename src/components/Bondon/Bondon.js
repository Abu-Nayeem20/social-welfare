import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import './Bondon.css'

const Bondon = () => {
    const [members, setMembers] = useState([]);

    useEffect( () =>{
        fetch('./members.JSON')
        .then( res => res.json())
        .then( data => setMembers(data));
    }, [])
    return (
        <div className='bondon-container'>
            <div className="members-area">
                {
                    members.map( member => <Member
                        key={member.key}
                         member={member}>
                         </Member>)
                }
            </div>
            <div className="cart-area">
                <h2>Added Members: {members.length} </h2>
                <h4>Donaition: </h4>
            </div>
        </div>
    );
};

export default Bondon;