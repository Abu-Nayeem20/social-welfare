import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
           <h2 className="title">Bondon Welfare Association</h2>
           <p className="tagline">To foster friendship, understanding, and mutual assistance among the helpless people.</p>
           <h2 className="budget">Current Budget: 10 Million</h2>
        </div>
    );
};

export default Header;