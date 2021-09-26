import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)

    let memberList = ' ';
    let totalDonation = 0;

    for(const member of cart){
        totalDonation = totalDonation + member.donation;
        memberList = memberList + ' ' + member.name;
    }

    return (
        <div className="cart">
            <h3>Member Added: {cart.length}</h3>
            <h4>Total Donations: ${totalDonation}</h4>
            <div className="added-member-list">
                <h3>Added Member list:</h3>
                <p>{memberList}</p>
                
            </div>
        </div>
    );
};

export default Cart;