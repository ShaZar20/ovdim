import React from 'react';

const LoginViaSmsPage = () => (
    <div className="container">
        <h2>התחברות לאזור אישי באמצעות סמס</h2>
        <div className="sub-container">
            <p>תעודת זהות *</p>
            <input />
            <p>טלפון נייד *</p>
            <form className="code-input">
                <input />
                <button disabled={false}>קבלת קוד</button>
            </form>
            <p>קוד *</p>
            <input 
                placeholder="יש להזין את הקוד שקיבלת"
                disabled={true}
            />
            
            <button 
                className="login-button"
                disabled={true}
            >
                כניסה
            </button>
        </div>
    </div>
);

export default LoginViaSmsPage; 