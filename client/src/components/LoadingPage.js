import React from 'react';
import logo from '../images/Zofim-logo.png';

const LoadingPage = () => (
    <div className="backdrop">
        <h1>הודעת הטקסט בדרך אליך</h1>
        <img src={logo} alt="Logo" />
    </div>
);

export default LoadingPage;