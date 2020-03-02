import React from 'react';
import logo from '../images/Zofim-logo.png';

const NotFoundPage = () => (
    <div className="backdrop">
        <h1>מצטערים, דף זה לא נמצא</h1>
        <img src={logo} alt="Logo" />
    </div>
);

export default NotFoundPage;