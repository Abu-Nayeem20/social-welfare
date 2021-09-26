import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Bondon.css'

const Bondon = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);

    // Load data using fetch and useEffect
    useEffect( () =>{
        fetch('./members.JSON')
        .then( res => res.json())
        .then( data => setMembers(data));
    }, [])

        // Select Button Handle
    const handleSelectToCart = member =>{
       const newCart = [...cart, member];
       setCart(newCart);
    }

    return (
        <div className='bondon-container'>
            <div className="members-area">
                {
                    members.map( member => <Member
                        key={member.key}
                        handleSelectToCart={handleSelectToCart}
                         member={member}>
                         </Member>)
                }
            </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Bondon;