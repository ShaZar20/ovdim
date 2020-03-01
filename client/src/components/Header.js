import React from 'react';
import logo from '../images/Zofim-logo.png';

const Header = () => (
    <div className="header">
        <img src={logo} alt="Logo" className="logo"/>
        <h1>תהליך הערכת עובדים</h1>
    </div>
);

export default Header;